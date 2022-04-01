import ShoppingViewModel from "../ViewModel";
import Model from "../Model";

describe("Testing View Model", () =>{

    it("Get shipping list", () =>{

        const model = new Model();
        const viewModel = new ShoppingViewModel(model);

        const list = viewModel.list;
        
        expect(list.length).toBe(3)
    })
})