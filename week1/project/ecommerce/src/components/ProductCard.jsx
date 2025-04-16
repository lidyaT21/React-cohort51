import React from "react";

const ProductCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
    </div>
  );
};

export default ProductCard;
