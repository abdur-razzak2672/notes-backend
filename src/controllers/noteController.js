import mongoose from 'mongoose';
import Note from '../models/Note.js';
import HttpError from '../utils/httpError.js';
import { getPagination, pageMeta } from '../utils/pagination.js';

export async function myNotes(req, res) {
  const { page, limit, skip } = getPagination(req.query);
  const filter = { user: req.user._id };

  const [notes, total] = await Promise.all([
    Note.find(filter).sort({ _id: -1 }).skip(skip).limit(limit),
    Note.countDocuments(filter),
  ]);
  res.json({ data: notes, meta: pageMeta(total, page, limit) });
}

export async function allNotes(req, res) {
  const { page, limit, skip } = getPagination(req.query);
  const { user } = req.query;

  if (user && !mongoose.isValidObjectId(user)) throw new HttpError(400, 'Invalid user id');
  const filter = user ? { user } : {};

  const [notes, total] = await Promise.all([
    Note.find(filter).sort({ _id: -1 }).skip(skip).limit(limit).populate('user', 'name email'),
    user ? Note.countDocuments(filter) : Note.estimatedDocumentCount(),
  ]);
  res.json({ data: notes, meta: pageMeta(total, page, limit) });
}

export async function getNote(req, res) {
  const note = await Note.findById(req.params.id);
  if (!note) throw new HttpError(404, 'Note not found');

  const isOwner = note.user.equals(req.user._id);
  if (!isOwner && req.user.role !== 'admin') throw new HttpError(404, 'Note not found');

  res.json({ note });
}

export async function createNote(req, res) {
  const { title, content } = req.body;
  const note = await Note.create({ user: req.user._id, title, content });
  res.status(201).json({ note });
}

export async function updateNote(req, res) {
  const changes = {};
  if (req.body.title !== undefined) changes.title = req.body.title;
  if (req.body.content !== undefined) changes.content = req.body.content;

  const note = await Note.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, changes, {
    new: true,
    runValidators: true,
  });
  if (!note) throw new HttpError(404, 'Note not found');

  res.json({ note });
}

export async function deleteNote(req, res) {
  const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!note) throw new HttpError(404, 'Note not found');

  res.json({ message: 'Note deleted' });
}
