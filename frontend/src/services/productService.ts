import {ProductType} from '../types/ProductType';
import api from './api';

export const getAllProducts = async (): Promise<ProductType[]> => {
  const response = await api.get('/products');
  const {data} = response;
  return data;
};

export const createProduct =
async (product: ProductType): Promise<ProductType> => {
  const response = await api.post(
      '/products',
      product,
  );
  const {data} = response;
  return data;
};

export const getProductById = async (id: string): Promise<ProductType> => {
  const response = await api.get(`/products/${id}`);
  const {data} = response;
  return data;
};
