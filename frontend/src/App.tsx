import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/products/:type" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
