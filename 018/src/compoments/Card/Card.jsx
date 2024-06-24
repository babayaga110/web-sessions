import React from "react";

export default function Card({ product, handleAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>
          Price: <span>${product.price}</span>
        </p>
        <button className="add-to-cart" onClick={()=> handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
