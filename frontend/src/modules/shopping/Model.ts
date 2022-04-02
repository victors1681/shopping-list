import { AxiosError } from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import { AddShoppingApi, deleteShoppingApi, getShoppingListApi, isErrorResponse, updateShoppingApi } from "../../networking/endpoints";
import { NetworkStatus } from "../../networking/rest-client";
import { ShoppingResponse } from "../../networking/types";
import { Shopping } from "./types";

export class Model {
  shoppingStatus: NetworkStatus = NetworkStatus.INITIAL;
  error: AxiosError | Error | null = null;
  shopping? : ShoppingResponse;

  constructor() {
    makeObservable(this, {
      getAllShopping: action,
      shopping: observable, 
      shoppingStatus: observable
    });
  }

  getAllShopping = async (): Promise<void> => {
    this.shoppingStatus = NetworkStatus.LOADING;
    const response = await getShoppingListApi();
    if (!isErrorResponse(response)) {
      runInAction(() => {
        this.shopping = response;
        this.shoppingStatus = NetworkStatus.SUCCESS;
      });
    } else {
      runInAction(() => {
        this.shoppingStatus = NetworkStatus.ERROR;
        this.error = response;
      });
    }
  };

  newItem = async (params: Shopping): Promise<void> => {
    this.shoppingStatus = NetworkStatus.LOADING;
    const response = await AddShoppingApi(params); 
    if (!isErrorResponse(response)) {
      runInAction(() => {
        //add the new element to the shopping array
       this.shopping?.data.shopping.push(response?.data.shopping);
        this.shoppingStatus = NetworkStatus.SUCCESS;
      });
    } else {
      runInAction(() => {
        this.shoppingStatus = NetworkStatus.ERROR;
        this.error = response;
      });
    }
  };

  updateItem = async (params: Shopping): Promise<void> => {
    this.shoppingStatus = NetworkStatus.LOADING;
    const response = await updateShoppingApi(params); 
    if (!isErrorResponse(response)) {
      runInAction(() => {
        
        const index = this.shopping?.data.shopping.findIndex(f => f.id === params.id);
        if(index && index > -1){
          //replace the item with the new item updated.
            this.shopping?.data.shopping.splice(index, 1, response?.data.shopping[0]);
        }
       this.shopping?.data.shopping.push(response?.data.shopping);
        this.shoppingStatus = NetworkStatus.SUCCESS;
      });
    } else {
      runInAction(() => {
        this.shoppingStatus = NetworkStatus.ERROR;
        this.error = response;
      });
    }
  };

  //delete
  deleteItem = async (id: number): Promise<void> => {
    this.shoppingStatus = NetworkStatus.LOADING;
    const response = await deleteShoppingApi(id); 
    if (!isErrorResponse(response)) {
      runInAction(() => {
        //remove item from the array to avoid another fetch
        const newList = this.shopping?.data.shopping.filter(f => f.id !== id) || [];
       this.shopping = {
         data: {
           shopping: newList
         }
       }
        this.shoppingStatus = NetworkStatus.SUCCESS;
      });
    } else {
      runInAction(() => {
        this.shoppingStatus = NetworkStatus.ERROR;
        this.error = response;
      });
    }
  };
}

export default Model;
