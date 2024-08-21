import React, {useEffect} from 'react';
import {createContext, ReactNode, useContext, useState} from 'react';
import {CartProductType} from '../types/CartProductType';
import Loading from '../pages/Loading';

interface CartContextType {
  cartProducts: CartProductType[];
  setCartProducts: (cartProducts: CartProductType[]) => void;
  saveCartProduct: (cartProduct: CartProductType) => void;
  quantityIncrement: (id: string, size: string) => void;
  quantityDecrement: (id: string, size: string) => void;
  deleteCartProduct: (id: string, size: string) => void;
  getCartSize: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({children}: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const getSavedCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    setLoading(false);
  };

  const saveCartProduct = (cartProduct: CartProductType) => {
    setLoading(true);
    const findProduct = cartProducts
        .find(
            (product) =>
              (product.id === cartProduct.id) &&
          (product.size === cartProduct.size));
    if (findProduct) {
      const newCart = cartProducts.map((product) => {
        if (product.id === cartProduct.id &&
          product.size === cartProduct.size) {
          product.quantity += 1;
        }
        return product;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCartProducts(newCart);
    } else {
      const newCart = [...cartProducts, cartProduct];
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCartProducts(newCart);
    }
    setLoading(false);
  };

  const quantityIncrement = (id: string, size: string) => {
    setLoading(true);
    const newCart = cartProducts.map((product) => {
      if (product.id === id &&
        product.size === size) {
        product.quantity += 1;
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartProducts(newCart);
    setLoading(false);
  };

  const quantityDecrement = (id: string, size: string) => {
    setLoading(true);
    const newCart = cartProducts.map((product) => {
      if (product.id === id &&
        product.size === size) {
        product.quantity = product.quantity === 1 ? 1 : product.quantity - 1;
      }
      return product;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartProducts(newCart);
    setLoading(false);
  };

  const deleteCartProduct = (id: string, size: string) => {
    setLoading(true);
    const newCart = cartProducts.filter(
        (product) =>
          !((product.id === id) &&
    (product.size === size)));
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartProducts(newCart);
    setLoading(false);
  };

  const getCartSize = (): number => {
    return cartProducts.length;
  };

  useEffect(() => {
    getSavedCart();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        saveCartProduct,
        quantityIncrement,
        quantityDecrement,
        deleteCartProduct,
        getCartSize,
      }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {CartProvider, useCart};
