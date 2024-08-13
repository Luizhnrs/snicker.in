import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./styles/output.css"
import Register from "./pages/Register";

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
