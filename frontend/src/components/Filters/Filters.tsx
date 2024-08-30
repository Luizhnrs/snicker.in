import React, {useState} from 'react';
import './filters.css';
import OrderByForm from '../OrderByForm';

export default function Filters() {
  const [orderBy, setOrderBy] = useState('');
  return (
    <form className="filters-form">
      <div>
        <OrderByForm orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>
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
