import { Router } from 'express';
import shoppingRouter from './shopping-router';

const baseRouter = Router();
baseRouter.use('/shopping', shoppingRouter);

export default baseRouter;
