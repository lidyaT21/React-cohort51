import { useState } from "react";
import Categories from "./components/Categories.jsx";
import Product from "./components/Product.jsx";
import "./App.css";
import Products from "./fake-data/all-products.js";

function App() {
  const [SelectedProducts, setSelectedProducts] = useState(Products);

  const FilteredCard = (category) => {
    const filtered = Products.map((card) => card.category === category);
    setSelectedProducts(filtered);
  };

  return (
    <div>
      <h1>Products</h1>
      <Categories setSelectedProducts={FilteredCard} />
      <Product SelectedProducts={SelectedProducts} />
    </div>
  );
}

export default App;
