import express from 'express';

import questionController from './questionController';
import studentController from './studentController';

const router = express.Router();
questionController(router);
studentController(router);

export default router;



