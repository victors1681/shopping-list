/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import shoppingService from '@services/shopping-service';
import { ParamMissingError } from '@shared/errors';
import { Shopping } from '@models/shopping-model';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all', 
    add: '/add'
} as const;



/**
 * Get all shoppingList.
 */
router.get(p.get, async (_: Request, res: Response) => {
    const shopping = await shoppingService.getAll();
    return res.status(OK).json({shopping});
});


/**
 * Add one shopping.
 */
router.post(p.add, async (req: Request, res: Response) => {
    const { shopping } = req.body;
    // Check param
    if (!shopping) {
        throw new ParamMissingError();
    }
    // Fetch data
    await shoppingService.addOne(shopping as Shopping);
    return res.status(CREATED).end();
});

export default router;
