import { AxiosError } from 'axios';

import {
  ShoppingResponse
  
} from './types';

import client from './rest-client';
import { Shopping } from '../modules/shopping/types';

//Guard Type

export function isErrorResponse<T>(data: any): data is AxiosError<T> {
  return data?.status !== 200;
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
  params: Shopping
): Promise<ShoppingResponse | undefined | AxiosError> => {
  try {
    const response = await client.post<Shopping, ShoppingResponse>(
      '/shopping/add',
      { params }
    );
    return response;
  } catch (err) {
    console.error(err);
    return err as AxiosError;
  }
};

export const updateShoppingApi = async (
  params: Shopping
): Promise<ShoppingResponse | undefined | AxiosError> => {
  try {
    const response = await client.put<Shopping, ShoppingResponse>(
      '/shopping/update',
      { params }
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
      '/shopping/delete',
      { params: { id } }
    );
    return response;
  } catch (err) {
    console.error(err);
    return err as AxiosError;
  }
};
 