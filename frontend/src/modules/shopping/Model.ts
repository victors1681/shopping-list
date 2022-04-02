import { AxiosError } from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import { getShoppingListApi, isErrorResponse } from "../../networking/endpoints";
import { NetworkStatus } from "../../networking/rest-client";
import { ShoppingResponse } from "../../networking/types";

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

  updateShopping = async (): Promise<void> => {};

  //delete
  deleteShopping = async (): Promise<void> => {};
}

export default Model;
