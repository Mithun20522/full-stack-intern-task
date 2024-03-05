import express from 'express'
import { createFormData, getFormData, updateFormData } from '../controllers/data.controller.js';

const router = express.Router();

// create data api route
router.post('/create-data',createFormData);

// read data api route
router.get('/get-data', getFormData);

// update data api route
router.patch('/update-data/:id', updateFormData);

export default router;