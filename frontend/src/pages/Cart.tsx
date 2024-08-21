import React from 'react';
import CartTable from '../components/CartTable';
import Header from '../components/Header';
import ShippingEstimateForm from '../components/ShippingEstimateForm';
import '../styles/cart.css';
import DiscountCouponForm from '../components/DiscountCouponForm';
import CartSummaryTable from '../components/CartSummaryTable';
import {useCart} from '../contexts/CartContext';

export default function Cart() {
  const {cartProducts} = useCart();
  return (
    <main className="cart-page">
      <Header />
      <div className="cart-container">
        <CartTable products={cartProducts} />
        <div className="cart-checkout">
          <ShippingEstimateForm />
          <DiscountCouponForm />
          <CartSummaryTable />
        </div>
      </div>
    </main>
  );
}
