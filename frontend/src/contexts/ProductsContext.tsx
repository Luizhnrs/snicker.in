import React, {
  createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ProductType} from '../types/ProductType';

const initialProducts = [
  {
    id: '1',
    name: 'Dunk Low Retro',
    images: ['https://imgnike-a.akamaihd.net/768x768/02919551A8.jpg'],
    price: 449.00,
    brand: 'Nike',
    onSale: false,
    salePrice: 0,
    color: 'blue/white',
  },
  {
    id: '2',
    name: 'Tênis Nike Air Max 90 Toggle Infantil',
    images: ['https://imgnike-a.akamaihd.net/768x768/0106037TA16.jpg'],
    price: 349.00,
    brand: 'Nike',
    onSale: true,
    salePrice: 249.99,
    color: 'green/pink',
  },
  {
    id: '3',
    name: 'Tênis Nike Court Vision Low Next Nature Masculinol',
    images: ['https://imgnike-a.akamaihd.net/768x768/0137025FA8.jpg'],
    price: 549.00,
    brand: 'Nike',
    onSale: true,
    salePrice: 349.99,
    color: 'white/brown',
  },
  {
    id: '4',
    name: 'Tênis Superstar XLG',
    images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/Tenis_Superstar_XLG_Branco_IF9995_01_standard.jpg'],
    price: 699.00,
    brand: 'Adidas',
    onSale: false,
    salePrice: 0,
    color: 'white/black',
  },
  {
    id: '5',
    name: 'Tênis Forum Bold',
    images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/244cfb86b65142539b845cc0007e8cbc_9366/Tenis_Forum_Bold_Branco_IE4762_01_standard.jpg'],
    price: 899.00,
    brand: 'Adidas',
    onSale: false,
    salePrice: 0,
    color: 'off white/violet',
  },
  {
    id: '6',
    name: 'Tênis Ozgaia',
    images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc835e70e0d949ec902a9c753e97d874_9366/Tenis_Ozgaia_Branco_ID8348_01_standard.jpg'],
    price: 899.00,
    brand: 'Adidas',
    onSale: true,
    salePrice: 689.90,
    color: 'white/red',
  },
  {
    id: '7',
    name: 'Gucci Ace Sneaker',
    images: ['https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1718384419/760775_FACMZ_4049_001_100_0000_Light-Mens-Gucci-Ace-sneaker-with-Web.jpg'],
    price: 1899.00,
    brand: 'Gucci',
    onSale: false,
    salePrice: 0,
    color: 'red/beige',
  },
  {
    id: '8',
    name: 'Bota Masculina Back-To-Berkeley IV Textile WP',
    images: ['https://thenorthface.vtexassets.com/arquivos/ids/223704/Bota-masculina-back-to-berkeley-IV-textile-wp-tnf-black-tnf-white-8177-KY4_1.png?v=638520924158700000'],
    price: 799.00,
    brand: 'The North Face',
    onSale: false,
    salePrice: 0,
    color: 'black',
  },
];

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


  const getProducts = () => {
    setProducts(initialProducts);
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
