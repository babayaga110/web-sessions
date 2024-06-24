import React, { useContext } from "react";
import { CartContext } from "../../App";

export default function CartCard({ product, handleRemoveItem }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={product.image} alt="${product.title}" />
      <div className="cart-item-details">
        <h4>${product.title}</h4>
        <p>${product.description}</p>
        <p>
          Price: <span>${product.price}</span>
        </p>
        <button className="remove" onClick={() => handleRemoveItem(product)}>
          Remove
        </button>
      </div>
    </div>
  );
}
