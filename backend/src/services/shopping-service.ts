import { ShoppingModel, Shopping } from '@models/shopping-model';

/**
 * Get all shoppingList.
 * 
 * @returns 
 */
function getAll(): Promise<Shopping[]> {
    return ShoppingModel.findAll();
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
  
export default {
    getAll,
    addOne
} as const;
