import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { login, register } from '../controllers/authController.js';

const router = Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 50, standardHeaders: true, legacyHeaders: false });

router.post('/register', limiter, register);
router.post('/login', limiter, login);

export default router;
