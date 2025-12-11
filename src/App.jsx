/* eslint-disable react-hooks/set-state-in-effect */
import { Routes, Route } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { OrdersPage } from "../../2-copy-of-code/lesson-07/ecommerce-project/src/pages/orders/OrdersPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
