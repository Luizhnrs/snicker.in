import "../styles/filters.css"

export default function Filters() {
  return (
    <form className="filters-form">
      <div className="order-by">
        <div>
          <hr />
          <p>Ordenar por</p>
          <hr />
        </div>
        <div>
          <button>Menor preço</button>
          <button>Maior preço</button>
        </div>
      </div>
      <div className="colors">
        <div>
          <hr />
          <p>Cores</p>
          <hr />
        </div>

        <div>
          <input type="checkbox" id="black" name="color" />
          <label htmlFor="black">Preto</label>

          <input type="checkbox" id="white" name="color" />
          <label htmlFor="white">Branco</label>
        </div>

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
};
