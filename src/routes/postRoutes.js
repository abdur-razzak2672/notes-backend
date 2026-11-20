import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { listPosts, getPost, createPost, deletePost, postsByUser } from '../controllers/postController.js';

const router = Router();

router.use(protect);

router.get('/', listPosts);
router.post('/', createPost);
router.get('/user/:userId', postsByUser);
router.get('/:id', getPost);
router.delete('/:id', deletePost);

export default router;
