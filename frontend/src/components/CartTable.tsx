import "../styles/cartTable.css";

const products = [
  {
    id: 1,
    name: "Dunk low",
    img: "https://www.copclub.com.br/cdn/shop/products/Wethenew-Sneakers-France-Nike-Dunk-Low-University-Blue-DD1391-102-1.0_800x_81d4aafa-9f95-4f99-8532-1ea4dcb214b0_grande.png?v=1622127347",
    price: 1044.99,
    brand: "Nike",
    onSale: false,
    salePrice: 0,
    color: "blue",
  },
  {
    id: 2,
    name: "Air jordan",
    img: "https://www.copclub.com.br/cdn/shop/files/jordan-w-air-jordan-1-low-panda_20032224_45173127_2048_1200x.png?v=1685563664",
    price: 845.90,
    brand: "Nike",
    onSale: true,
    salePrice: 789.99,
    color: "white",
  }
]

export default function CartTable() {
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Produtos</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Valor total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(({ id, name, price, img, brand, color }) => (
            <tr key={`${id} ${name}`}>
              <td className="table-product">
                <img src={img} alt="" width="100" />
                <div>
                  <p>{brand} {name}</p>
                  <p>Cor: {color}</p>
                </div>
              </td>
              <td>1</td>
              <td>R$ {price}</td>
              <td>R$ {price}</td>
              <td>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
