import React, {useEffect} from 'react';
import {createContext, ReactNode, useContext, useState} from 'react';
import {CartProductType} from '../types/CartProductType';

interface CartContextType {
  cartProducts: CartProductType[];
  setCartProducts: (cartProducts: CartProductType[]) => void;
  saveCartProduct: (cartProduct: CartProductType) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({children}: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  const getSavedCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartProducts(JSON.parse(storedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

  const saveCartProduct = (cartProduct: CartProductType) => {
    const storedCart= localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart: CartProductType[] = JSON.parse(storedCart);
      const newCart = [...parsedCart, cartProduct];
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCartProducts(newCart);
    }
  };

  useEffect(() => {
    getSavedCart();
  }, []);

  return (
    <CartContext.Provider
      value={{cartProducts, setCartProducts, saveCartProduct}}>
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
