import React from "react";
import Button from "./Button.jsx";
import categories from "../fake-data/all-categories.js";

const Categories = ({ setSelectedProducts }) => {
  return (
    <div className="button-set">
      {categories.map((category, index) => (
        <Button
          key={index}
          buttonName={category}
          setSelectedProducts={setSelectedProducts}
        />
      ))}
    </div>
  );
};

export default Categories;
