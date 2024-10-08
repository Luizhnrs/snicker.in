import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart/Cart';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import ProfileData from './pages/ProfileData';
import Favorites from './pages/Favorites';
import Payment from './pages/Payment';
import CreateProduct from './pages/CreateProduct';
import Matriz from './pages/Matriz';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:type" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/profile-data" element={<ProfileData />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/matriz" element={<Matriz />} />
          <Route path="/matriz/create-product" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
