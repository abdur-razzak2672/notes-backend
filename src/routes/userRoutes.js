import { Router } from 'express';
import { protect, allow } from '../middleware/auth.js';
import {
  getMe,
  updateMe,
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  usersByInterest,
} from '../controllers/userController.js';

const router = Router();

router.use(protect);

router.get('/me', getMe);
router.patch('/me', updateMe);

router.use(allow('admin'));

router.get('/', listUsers);
router.post('/', createUser);
router.get('/interests', usersByInterest);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
