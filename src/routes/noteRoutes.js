import { Router } from 'express';
import { protect, allow } from '../middleware/auth.js';
import { myNotes, allNotes, getNote, createNote, updateNote, deleteNote } from '../controllers/noteController.js';

const router = Router();

router.use(protect);

router.get('/', myNotes);
router.post('/', createNote);
router.get('/all', allow('admin'), allNotes);
router.get('/:id', getNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
