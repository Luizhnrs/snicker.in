import React from 'react';
import './filters.css';

export default function Filters() {
  return (
    <form className="filters-form">
      <div className="brands">
        <div>
          <hr />
          <p>Marca</p>
          <hr />
        </div>

        <div>
          <select name="brand" id="brand">
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
          </select>
        </div>
      </div>
    </form>
  );
}
