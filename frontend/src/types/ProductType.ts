import {ProductImage} from './ProductImage';

export type ProductType = {
  id?: string,
  productName: string,
  productDescription: string,
  productImages?: ProductImage[],
  productPrice: number,
  productBrand: string,
  productOnSale: boolean,
  productSalePrice: number,
  productCategory: string,
};
