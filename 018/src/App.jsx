import { createContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Cart from "./Page/Cart";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
