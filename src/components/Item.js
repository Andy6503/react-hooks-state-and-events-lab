import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true)

  function handleIsInCart(){
    setIsInCart((isInCart) => !isInCart)
  }
  
  return (
    <li className={isInCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ isInCart ? "add" : "remove"} onClick={handleIsInCart}>
        {isInCart ? "Add to" : "Remove from"} Cart
        </button>
    </li>
  );
}

export default Item;
