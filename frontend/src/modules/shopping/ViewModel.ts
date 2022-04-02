import { action, makeObservable, observable } from "mobx";
import { NetworkStatus } from "../../networking/rest-client";
import ShoppingModel from "./Model";
import { Shopping } from "./types.d";

export class ShoppingViewModel {
  private _model?: ShoppingModel;
  private _shoppingId? : number;
  isNewEditOpen = false
  isConfirmOpen = false
  private _idToDelete? : number

  constructor(model: ShoppingModel) {
    this._model = model;
    makeObservable(this, { 
      isNewEditOpen: observable,
      handleOpenNewEdit: action,
      handleFormSubmission: action,
      isConfirmOpen: observable,
      confirmDelete: action
    });
  }

  private sortObj = (a: Shopping, b: Shopping) => {
     if(a.id - b.id > 1) { 
       return -1 
      } else if (a.id - b.id < 1) { 
        return 1
      }else { 
        return 0
      } 
  }

  get isNew():boolean{
    return !!this._shoppingId
  }

  get isLoading(): boolean {
    return this._model?.shoppingStatus === NetworkStatus.LOADING;
  }

  get list(): Shopping[] {
    return this._model?.shopping?.data?.shopping?.slice().sort(this.sortObj) || []
  }

  /**
   * Find the shopping data if the shoppingId is defined to handle new or edit form
   */
  get initialFormValues(): Shopping | undefined {
    if(this._shoppingId) {
      return this._model?.shopping?.data.shopping.find(f=> f.id === this._shoppingId);
    }
    return undefined;
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

  checkSingleRow = async(id: number, purchased: boolean ) => {
    const parameters = {
      id, 
      purchased
    }
    await this._model?.updateItem(parameters as Shopping);
  }

  deleteItem = async () => {
    if(this._idToDelete){
      await this._model?.deleteItem(this._idToDelete);
      this.closeDeleteConfirmation();
    }
  }

  confirmDelete = (id: number) => {
    this.isConfirmOpen = true;
    this._idToDelete = id;
  }
  closeDeleteConfirmation = () => {
    this.isConfirmOpen = false;
    this._idToDelete = undefined;
  }

  handleFormSubmission = async (parameters: Shopping) => {
    
    if(this._shoppingId){ 
      //Update
      await this._model?.updateItem(parameters);
    }else{
      //new item
      await this._model?.newItem(parameters);
    }
    this.isNewEditOpen = false;
  }
}

export default ShoppingViewModel;
