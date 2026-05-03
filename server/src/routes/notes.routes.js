// routes/notes.routes.js
import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { createNoteController, getNoteController, deleteNoteController } from '../controllers/notes.controller.js';

const router = express.Router();

router.post("/create", authMiddleware, createNoteController);
router.get("/get", authMiddleware, getNoteController);
router.delete("/delete/:id", authMiddleware, deleteNoteController);

export default router;