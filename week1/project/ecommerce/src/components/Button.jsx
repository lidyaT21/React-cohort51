import React from "react";

const Button = ({ buttonName, setSelectedProducts }) => {
  return (
    <button onClick={() => setSelectedProducts(buttonName)}>
      {buttonName}
    </button>
  );
};

export default Button;
