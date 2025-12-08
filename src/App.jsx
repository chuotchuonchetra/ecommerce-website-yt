import { Routes, Route } from "react-router";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { OrdersPage } from "../../2-copy-of-code/lesson-07/ecommerce-project/src/pages/orders/OrdersPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchAppData();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
