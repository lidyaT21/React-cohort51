import { useState } from "react";
import "./App.css";
import ButtonSet from "./components/ButtonSet.jsx";
import CardSetMain from "./components/CardSetMain.jsx";
import allProducts from "./fake-data/all-products.js";

function App() {
  const [filterCards, setFilterCards] = useState(allProducts);

  const handleFilterCards = (category) => {
    const filtered = allProducts.filter((card) => card.category === category);
    setFilterCards(filtered);
  };

  return (
    <main>
      <h1>Products</h1>
      <ButtonSet setFilterCards={handleFilterCards} />
      <CardSetMain filterCards={filterCards} />
    </main>
  );
}

export default App;
