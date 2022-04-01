import {sequelize} from "../database";
import { ShoppingModel } from '../../models/shopping-model';



describe("Shopping Tests" , () => {

    beforeAll(async () => {
        try { 
            await sequelize.authenticate();
            await sequelize.sync({ force: true });
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error(error);
          }    
    });

    
it('create shopping', async () => { 
    const shopping = await ShoppingModel.create({
        id: 1,
        name: 'coffee',
        description: 'need coffee',
        qty: 2,
    }); 
    expect(shopping.id).toEqual(1);
});

test('update shopping', async () => {
    
    await ShoppingModel.update({ name: "rice" }, { where: { id: 1 }});
    const shopping = await ShoppingModel.findByPk(1);
    expect(shopping?.name).toBe("rice")
});


test('get shopping', async () => {
    
    const shopping = await ShoppingModel.findByPk(1);
    expect(shopping?.name).toEqual('rice');
    expect(shopping?.description).toEqual('need coffee');
    expect(shopping?.qty).toBe(2);
});

test('delete shopping', async () => {
    
    await ShoppingModel.destroy({
        where: {
            id: 1
        }
    });
    const shopping = await ShoppingModel.findByPk(1);
    expect(shopping).toBeNull();
});

afterAll(async () => {
    await sequelize.close();
});
    
})
