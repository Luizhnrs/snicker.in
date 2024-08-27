import React from 'react';

type OrderByFormProps = {
  orderBy: string,
  setOrderBy: (orderBy: string) => void;
}

export default function OrderByForm({orderBy, setOrderBy}: OrderByFormProps) {
  return (
    <form className="order-by">
      <div>
        <hr />
        <p>Ordenar por</p>
        <hr />
      </div>
      <div>
        <label
          htmlFor="highestPrice"
        >Menor preço</label>
        <input
          type="radio"
          name="orderBy"
          value="highestPrice"
          checked={orderBy === 'highestPrice'}
          onChange={({target}) => setOrderBy(target.value)}
          id="highestPrice" />
        <label
          htmlFor="lowestPrice">Maior preço</label>
        <input
          type="radio"
          name="orderBy"
          value="lowestPrice"
          checked={orderBy === 'lowestPrice'}
          onChange={({target}) => setOrderBy(target.value)}
          id="lowestPrice" />
      </div>
    </form>
  );
}
