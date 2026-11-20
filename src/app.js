import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import postRoutes from './routes/postRoutes.js';
import { notFound, errorHandler } from './middleware/error.js';

const app = express();

const origins = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',').map((o) => o.trim()) : true;

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({ origin: origins }));
app.use(express.json({ limit: '100kb' }));

app.get('/', (req, res) => res.json({ status: 'ok', service: 'notes-api' }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
