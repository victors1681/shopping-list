import { AxiosError } from 'axios';

import {
  ShoppingResponse, ShoppingResponseSingle
  
} from './types';

import client from './rest-client';
import { Shopping } from '../modules/shopping/types';

//Guard Type

export function isErrorResponse<T>(data: any): data is AxiosError<T> {
  const result = data?.status === 500 || data?.status === 400 || data?.status === 404 || data.status === undefined;
  return result
}

/**
 * List of shopping List
 * @returns
 */
export const getShoppingListApi = async (): Promise<ShoppingResponse | undefined | AxiosError> => {
  try {
    const response = await client.get<any, ShoppingResponse>(
      '/shopping/all'
    );
    return response;
  } catch (err) {
    console.error(err);
    return err as AxiosError;
  }
};

export const AddShoppingApi = async (
  shopping: Shopping
): Promise<ShoppingResponseSingle | undefined | AxiosError> => {
  try {
    const response = await client.post<Shopping, ShoppingResponseSingle>(
      '/shopping/add',
      { shopping }
    );
    return response;
  } catch (err) {
    console.error(err);
    return err as AxiosError;
  }
};

export const updateShoppingApi = async (
  shopping: Shopping
): Promise<ShoppingResponse | undefined | AxiosError> => {
  try {
    const response = await client.put<Shopping, ShoppingResponse>(
      '/shopping/update',
      { shopping }
    );
    return response;
  } catch (err) {
    console.error(err);
    return err as AxiosError;
  }
};

export const deleteShoppingApi = async (
  id: number
): Promise<void | undefined | AxiosError> => {
  try {
    const response = await client.delete<number, void>(
      `/shopping/delete/${id}`,
    );
    return response;
  } catch (err) {
    console.error(err);
    return err as AxiosError;
  }
};
 