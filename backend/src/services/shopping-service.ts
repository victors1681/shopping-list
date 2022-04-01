import { ShoppingModel, Shopping } from '../models/shopping-model';
import { UserNotFoundError } from '../shared/errors';


/**
 * Get all shoppingList.
 * 
 * @returns 
 */
function getAll(): Promise<Shopping[]> {
    return ShoppingModel.findAll();
}

/**
 * Get one shoppingList.
 * 
 * @returns 
 */
async function getOne(id: number): Promise<Shopping[]> {
    const shopping = await ShoppingModel.findByPk(id);
    if(shopping){
        return [shopping]
    }
    return []
}


/**
 * Add one shopping.
 * 
 * @param shopping 
 * @returns 
 */
function addOne(shopping: Shopping): Promise<Shopping> {
    return ShoppingModel.create({...shopping});
}


/**
 * Update one shopping.
 * 
 * @param shopping 
 * @returns 
 */
async function updateOne(shopping: Shopping): Promise<[affectedCount: number]> {
    
    const persists = await ShoppingModel.findByPk(shopping.id);
    if (!persists) {
        throw new UserNotFoundError();
    }

    return ShoppingModel.update({ ...shopping }, { where: { id: shopping.id } });
}


/**
 * Delete a shopping by their id.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<number> {
    const persists = await ShoppingModel.findByPk(id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return ShoppingModel.destroy({
        where: {
            id
        }
    })
}

export default {
    getAll,
    addOne,
    updateOne,
    delete: deleteOne,
    getOne
} as const;
