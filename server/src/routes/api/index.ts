import { Router } from 'express';
import { userRouter } from './user-routes.js';
import characterRouter from './heroapi-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/character', characterRouter);

export default router;
