import React, {
  createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ProductType} from '../types/ProductType';
import {getAllProducts} from '../services/productService';

interface ProductsContextType {
  products: ProductType[];
}

const ProductsContext =
createContext<ProductsContextType | undefined>(undefined);

interface ProductsProviderProps {
  children: ReactNode;
}

function ProductsProvider({children}: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);


  const getProducts = async () => {
    try {
      const productsList = await getAllProducts();
      setProducts(productsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }
  return context;
};

export {ProductsProvider, useProducts};
