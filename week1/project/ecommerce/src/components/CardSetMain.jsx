import React from "react";
import Card from "./Card.jsx";
const CardSetMain = ({ filterCards }) => {
  return (
    <div className="card-set">
      {Array.isArray(filterCards) &&
        filterCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
          />
        ))}
    </div>
  );
};

export default CardSetMain;
