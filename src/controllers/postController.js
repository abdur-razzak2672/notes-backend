import mongoose from 'mongoose';
import Post from '../models/Post.js';
import User from '../models/User.js';
import HttpError from '../utils/httpError.js';
import { getPagination, pageMeta } from '../utils/pagination.js';

export async function listPosts(req, res) {
  const { page, limit, skip } = getPagination(req.query);
  const [posts, total] = await Promise.all([
    Post.find().sort({ _id: -1 }).skip(skip).limit(limit).populate('author', 'name'),
    Post.estimatedDocumentCount(),
  ]);
  res.json({ data: posts, meta: pageMeta(total, page, limit) });
}

export async function getPost(req, res) {
  const post = await Post.findById(req.params.id).populate('author', 'name');
  if (!post) throw new HttpError(404, 'Post not found');
  res.json({ post });
}

export async function createPost(req, res) {
  const { title, body } = req.body;
  const post = await Post.create({ author: req.user._id, title, body });
  res.status(201).json({ post });
}

export async function deletePost(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) throw new HttpError(404, 'Post not found');

  if (!post.author.equals(req.user._id) && req.user.role !== 'admin') {
    throw new HttpError(403, 'You can only delete your own posts');
  }

  await post.deleteOne();
  res.json({ message: 'Post deleted' });
}

export async function postsByUser(req, res) {
  const { userId } = req.params;
  if (!mongoose.isValidObjectId(userId)) throw new HttpError(400, 'Invalid user id');

  const { page, limit, skip } = getPagination(req.query);

  const [result] = await User.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(userId) } },
    { $project: { name: 1, interests: 1 } },
    {
      $lookup: {
        from: Post.collection.name,
        localField: '_id',
        foreignField: 'author',
        pipeline: [
          { $sort: { _id: -1 } },
          {
            $facet: {
              items: [{ $skip: skip }, { $limit: limit }, { $project: { author: 0 } }],
              total: [{ $count: 'value' }],
            },
          },
        ],
        as: 'posts',
      },
    },
    { $unwind: '$posts' },
  ]);

  if (!result) throw new HttpError(404, 'User not found');

  const { items, total } = result.posts;
  res.json({
    user: { _id: result._id, name: result.name, interests: result.interests },
    data: items,
    meta: pageMeta(total[0]?.value || 0, page, limit),
  });
}
