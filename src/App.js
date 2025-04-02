import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const appContext = createContext();
function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const products = [
    { id: 1, name: "Product 1", price: 56 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 35 },
    { id: 4, name: "Product 4", price: 25 },
    { id: 5, name: "Product 5", price: 95 },
    { id: 6, name: "Product 6", price: 85 },
  ];
  return (
    <BrowserRouter>
      <appContext.Provider
        value={{ users, setUsers, user, setUser, products, cart, setCart }}
      >
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;