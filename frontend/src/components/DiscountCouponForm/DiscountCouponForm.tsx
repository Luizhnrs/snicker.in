import React from 'react';

export default function DiscountCouponForm() {
  return (
    <form className="discount-coupon-form">
      <p>Cupom de desconto</p>
      <div>
        <input
          type="text"
          id="cupon"
          placeholder="EXEMPLO123"
        />
        <button>Aplicar</button>
      </div>
    </form>
  );
}
