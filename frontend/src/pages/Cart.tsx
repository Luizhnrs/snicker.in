import Header from "../components/Header"
import "../styles/cart.css";

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

export default function Cart() {
  return (
    <main className="cart-page">
      <Header />
      <div className="cart-container">
        <table>
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
              products.map(({ name, price, img, brand, color }) => (
                <tr>
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
                  <td><button>Excluir</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="subtotal">
          <p>Subtotal: </p>
          <p>R$ {products.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}</p>
        </div>
      </div>
    </main>
  )
};
