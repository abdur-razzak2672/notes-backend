import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import HttpError from '../utils/httpError.js';

export async function protect(req, res, next) {
  const [scheme, token] = (req.headers.authorization || '').split(' ');
  if (scheme !== 'Bearer' || !token) throw new HttpError(401, 'Not authenticated');

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new HttpError(401, 'Invalid or expired token');
  }

  const user = await User.findById(payload.sub);
  if (!user) throw new HttpError(401, 'User no longer exists');

  req.user = user;
  next();
}

export function allow(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) throw new HttpError(403, 'You do not have permission for this action');
    next();
  };
}
