import React from "react";

export default function Card({ product }) {
  return (
    <div class="product-card">
      <img src={product.image} alt={product.title} />
      <div class="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          Price: <span>${product.price}</span>
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
