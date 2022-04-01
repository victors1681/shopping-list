import ShoppingModel from "./Model";
import { Shopping } from "./types.d";

export class ShoppingViewModel {
  private _model?: ShoppingModel;

  constructor(model: ShoppingModel) {
    this._model = model;
  }

  get list(): Shopping[] {
    return [];
  }

  get getSingleRecord(): Shopping {
    return {} as any;
  }
}

export default ShoppingViewModel;
