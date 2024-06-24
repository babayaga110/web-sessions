import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Main() {
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

  return (
    <main id="main">
      <h3 class="main-heading" id="remove">
        Featured Products
      </h3>
      <div class="divider"></div>

      <div id="products" class="product-container">

    {
      products.map((product , index )=>{
        return <Card product={product} key={index}/>
      })
    }

      </div>
    </main>
  );
}
