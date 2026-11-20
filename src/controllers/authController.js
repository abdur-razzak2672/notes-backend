import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import HttpError from '../utils/httpError.js';
import { cleanInterests } from '../utils/interests.js';

function signToken(user) {
  return jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
}

export async function register(req, res) {
  const { name, email, password, interests } = req.body;
  if (!name || !email || !password) throw new HttpError(400, 'Name, email and password are required');

  const user = await User.create({ name, email, password, interests: cleanInterests(interests) });
  res.status(201).json({ token: signToken(user), user });
}

export async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) throw new HttpError(400, 'Email and password are required');

  const user = await User.findOne({ email: String(email).toLowerCase().trim() }).select('+password');
  if (!user || !(await user.comparePassword(password))) throw new HttpError(401, 'Wrong email or password');

  res.json({ token: signToken(user), user });
}
