import axios from "axios";
import { Header } from "../../components/Header.jsx";
import "./HomePage.css";
import { useEffect, useState } from "react";
import ProductsGrids from "./ProductGrids.jsx";
export function HomePage({ cart }) {
  const [products, setPrtoducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setPrtoducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrids products={products} />
      </div>
    </>
  );
}
