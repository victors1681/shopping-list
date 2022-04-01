/* eslint-disable @typescript-eslint/no-misused-promises */
import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import shoppingService from '@services/shopping-service';
import { ParamMissingError } from '../shared/errors';
import { Shopping } from '../models/shopping-model';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    getById: '/:id',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;



/**
 * Get all shoppingList.
 */
router.get(p.get, async (_: Request, res: Response) => {
    const shopping = await shoppingService.getAll();
    return res.status(OK).json({shopping});
});


/**
 * Get one shopping.
 */
 router.get(p.getById, async (req: Request, res: Response) => {
    const { id } = req.params;
    
    if(id){
        const shopping = await shoppingService.getOne(parseInt(id));
        return res.status(OK).json({shopping});
    }
    return res.status(404).end();
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


/**
 * Update one shopping.
 */
router.put(p.update, async (req: Request, res: Response) => {
    const { shopping } = req.body;
    const id = shopping.id as number;
    // Check param
    if (!shopping && !id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await shoppingService.updateOne(shopping as Shopping);
    const updated = await shoppingService.getOne(id);
    return res.status(OK).json({shopping: updated});
});


/**
 * Delete one shopping.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await shoppingService.delete(Number(id));
    return res.status(OK).end();
});

export default router;
