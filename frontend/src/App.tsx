import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./styles/output.css"

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
