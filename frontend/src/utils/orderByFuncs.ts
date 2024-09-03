import {ProductType} from '../types/ProductType';

export const sortByRelevance = (products: ProductType[]): ProductType[] => {
  return products.sort((a, b) => {
    if (a.productOnSale && !b.productOnSale) {
      return -1;
    } else if (!a.productOnSale && b.productOnSale) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const sortByHighestPrice = (products: ProductType[]): ProductType[] => {
  return products.sort((a, b) => {
    if (a.productPrice > b.productPrice) {
      return -1;
    } else if (a.productPrice < b.productPrice) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const sortByLowestPrice = (products: ProductType[]): ProductType[] => {
  return products.sort((a, b) => {
    if (a.productPrice < b.productPrice) {
      return -1;
    } else if (a.productPrice > b.productPrice) {
      return 1;
    } else {
      return 0;
    }
  });
};
