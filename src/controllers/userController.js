import User from '../models/User.js';
import Note from '../models/Note.js';
import Post from '../models/Post.js';
import HttpError from '../utils/httpError.js';
import { getPagination, pageMeta } from '../utils/pagination.js';
import { cleanInterests } from '../utils/interests.js';

function applyChanges(user, body, { allowRole = false } = {}) {
  const { name, email, password, interests, role } = body;
  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  if (password) user.password = password;
  if (interests !== undefined) user.interests = cleanInterests(interests);
  if (allowRole && role !== undefined) user.role = role;
}

export async function getMe(req, res) {
  res.json({ user: req.user });
}

export async function updateMe(req, res) {
  applyChanges(req.user, req.body);
  await req.user.save();
  res.json({ user: req.user });
}

export async function listUsers(req, res) {
  const { page, limit, skip } = getPagination(req.query);
  const [users, total] = await Promise.all([
    User.find().sort({ _id: -1 }).skip(skip).limit(limit),
    User.estimatedDocumentCount(),
  ]);
  res.json({ data: users, meta: pageMeta(total, page, limit) });
}

export async function getUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) throw new HttpError(404, 'User not found');
  res.json({ user });
}

export async function createUser(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) throw new HttpError(400, 'Name, email and password are required');

  const user = new User();
  applyChanges(user, req.body, { allowRole: true });
  await user.save();
  res.status(201).json({ user });
}

export async function updateUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) throw new HttpError(404, 'User not found');

  if (user.id === req.user.id && req.body.role && req.body.role !== 'admin') {
    throw new HttpError(400, 'You cannot remove your own admin role');
  }

  applyChanges(user, req.body, { allowRole: true });
  await user.save();
  res.json({ user });
}

export async function deleteUser(req, res) {
  if (req.params.id === req.user.id) throw new HttpError(400, 'You cannot delete your own account');

  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) throw new HttpError(404, 'User not found');

  await Promise.all([Note.deleteMany({ user: user._id }), Post.deleteMany({ author: user._id })]);
  res.json({ message: 'User deleted' });
}

export async function usersByInterest(req, res) {
  const { page, limit, skip } = getPagination(req.query);
  const interest = req.query.interest?.trim().toLowerCase();
  const match = interest ? { interests: interest } : { interests: { $type: 'string' } };

  const [result] = await User.aggregate([
    { $match: match },
    { $project: { name: 1, email: 1, interests: 1 } },
    { $unwind: '$interests' },
    ...(interest ? [{ $match: { interests: interest } }] : []),
    {
      $group: {
        _id: '$interests',
        count: { $sum: 1 },
        users: { $push: { _id: '$_id', name: '$name', email: '$email' } },
      },
    },
    { $sort: { count: -1, _id: 1 } },
    {
      $facet: {
        data: [{ $skip: skip }, { $limit: limit }, { $project: { _id: 0, interest: '$_id', count: 1, users: 1 } }],
        total: [{ $count: 'value' }],
      },
    },
  ]);

  const total = result.total[0]?.value || 0;
  res.json({ data: result.data, meta: pageMeta(total, page, limit) });
}
