import React from "react";
import ProductCard from "./ProductCard";
const Product = ({ SelectedProducts }) => {
  return (
    <div className="card-set">
      {SelectedProducts.map((card) => (
        <ProductCard
          key={card.id}
          image={card.image}
          title={card.title}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Product;
