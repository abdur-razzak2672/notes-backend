import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../src/models/User.js';
import Note from '../src/models/Note.js';
import Post from '../src/models/Post.js';
import { demoUsers } from './demoData.js';

async function seedAdmin() {
  const { ADMIN_NAME = 'Admin', ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required');

  let admin = await User.findOne({ email: ADMIN_EMAIL.toLowerCase() });
  if (!admin) admin = new User({ name: ADMIN_NAME, email: ADMIN_EMAIL, interests: ['programming', 'reading'] });

  admin.role = 'admin';
  admin.password = ADMIN_PASSWORD;
  await admin.save();
  console.log(`Admin ready: ${admin.email}`);
}

async function seedDemo() {
  const password = process.env.DEMO_PASSWORD;
  if (!password) throw new Error('DEMO_PASSWORD is required for demo data');

  for (const { posts, notes, ...profile } of demoUsers) {
    let user = await User.findOne({ email: profile.email });
    if (!user) user = await User.create({ ...profile, password });

    const [noteCount, postCount] = await Promise.all([
      Note.countDocuments({ user: user._id }),
      Post.countDocuments({ author: user._id }),
    ]);

    if (noteCount === 0) await Note.insertMany(notes.map((n) => ({ ...n, user: user._id })));
    if (postCount === 0) await Post.insertMany(posts.map((p) => ({ ...p, author: user._id })));

    console.log(`${user.email}: ${noteCount || notes.length} notes, ${postCount || posts.length} posts`);
  }
}

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Promise.all([User.syncIndexes(), Note.syncIndexes(), Post.syncIndexes()]);

  await seedAdmin();
  if (process.argv.includes('--demo')) await seedDemo();

  await mongoose.disconnect();
}

run().catch(async (err) => {
  console.error(err.message);
  await mongoose.disconnect();
  process.exit(1);
});
