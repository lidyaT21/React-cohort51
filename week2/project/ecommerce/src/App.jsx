import { useState, useEffect } from "react";
import "./App.css";
import CategoryList from "./CategoryList.jsx";
import ProductList from "./ProductList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";

function App() {
  const [filterProducts, setFilterProducts] = useState(null);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchProducts = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setFilterProducts(data);
    } catch (error) {
      setError("Unable to get products, please try again");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDeafultCard = () =>
    fetchProducts("https://fakestoreapi.com/products");

  const fetchSelectedCategory = (category) =>
    fetchProducts(`https://fakestoreapi.com/products/category/${category}`);

  useEffect(() => {
    fetchDeafultCard();
  }, []);

  const handleFilterProducts = (category) => {
    fetchSelectedCategory(category);
  };

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Products</h1>
              <CategoryList onFilterProducts={handleFilterProducts} />
              <ProductList filterProducts={filterProducts} />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
