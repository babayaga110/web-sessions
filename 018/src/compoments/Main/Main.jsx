import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { CartContext } from "../../App";

export default function Main() {
  const {cart , setCart} = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        })
        .catch((err) => console.error(err));

      return response;
    };
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  
  return (
    <main id="main">
      <h3 className="main-heading" id="remove">
        Featured Products
      </h3>
      <div className="divider"></div>

      <div id="products" className="product-container">
        {products.map((product, index) => {
          return <Card product={product} key={index} handleAddToCart={handleAddToCart} />;
        })}
      </div>
    </main>
  );
}
