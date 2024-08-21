import React from 'react';
import CartTable from '../components/CartTable';
import Header from '../components/Header';
import ShippingEstimateForm from '../components/ShippingEstimateForm';
import '../styles/cart.css';
import DiscountCouponForm from '../components/DiscountCouponForm';
import CartSummaryTable from '../components/CartSummaryTable';

export default function Cart() {
  return (
    <main className="cart-page">
      <Header />
      <div className="cart-container">
        <CartTable />
        <div className="cart-checkout">
          <ShippingEstimateForm />
          <DiscountCouponForm />
          <CartSummaryTable />
        </div>
      </div>
    </main>
  );
}
