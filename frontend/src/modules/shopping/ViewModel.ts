import { action, makeObservable, observable } from "mobx";
import ShoppingModel from "./Model";
import { Shopping } from "./types.d";

export class ShoppingViewModel {
  private _model?: ShoppingModel;
  private _shoppingId? : number;
  isNewEditOpen = false

  constructor(model: ShoppingModel) {
    this._model = model;
    makeObservable(this, { 
      isNewEditOpen: observable,
      handleOpenNewEdit: action,
      handleFormSubmission: action
    });
  }

  get list(): Shopping[] {
    return this._model?.shopping?.data.shopping || []
  }

  /**
   * Find the shopping data if the shoppingId is defined to handle new or edit form
   */
  get initialFormValues(): Shopping | undefined {
    if(this._shoppingId) {
      return this._model?.shopping?.data.shopping.find(f=> f.id === this._shoppingId);
    }
  }

  get getSingleRecord(): Shopping {
    return {} as any;
  }

  handleOpenNewEdit = (close?: boolean, shoppingId?: number): void => {
 
    this._shoppingId = shoppingId; 

    if(close) {
      this.isNewEditOpen = false;
    }else {
      this.isNewEditOpen = true;
    }
  }

  handleFormSubmission = async (parameters: Shopping) => {
    
    const result = await this._model?.newItem(parameters);
    this.isNewEditOpen = false;

  }
}

export default ShoppingViewModel;
