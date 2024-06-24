import React, { useContext } from "react";
import CartCard from "../compoments/CartCard/CartCard";
import { CartContext } from "../App";
import Navbar from "../compoments/Navbar/Navbar";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleRemoveItem = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  }


  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>Cart</h1>
        <div className="divider"></div>
        <div className="cart-items" id="cartList">
          {cart?.map((product, index) => {
            return (
              <CartCard
                product={product}
                key={index}
                cart={cart}
                setCart={setCart}
                handleRemoveItem={handleRemoveItem}
              />
            );
          })}
        </div>

        <div className="divider"></div>

        <div className="cart-total">
          <h3>
            Total: $<span id="total">{total}</span>
          </h3>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
}
