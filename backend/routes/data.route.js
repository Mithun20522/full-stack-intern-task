import express from 'express'
import { createFormData } from '../controllers/data.controller.js';

const router = express.Router();

// create data api route
router.post('/create-data',createFormData);

export default router;