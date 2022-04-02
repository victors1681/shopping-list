import ShoppingModel from "./Model";
import { Shopping } from "./types.d";

export class ShoppingViewModel {
  private _model?: ShoppingModel;

  constructor(model: ShoppingModel) {
    this._model = model;
  }

  get list(): Shopping[] {
    return this._model?.shopping?.data.shopping || []
  }

  get getSingleRecord(): Shopping {
    return {} as any;
  }
}

export default ShoppingViewModel;
