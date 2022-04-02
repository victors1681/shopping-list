import { AxiosError } from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import { AddShoppingApi, getShoppingListApi, isErrorResponse } from "../../networking/endpoints";
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

  updateShopping = async (): Promise<void> => {};

  //delete
  deleteShopping = async (): Promise<void> => {};
}

export default Model;
