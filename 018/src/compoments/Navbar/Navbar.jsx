import React, { useContext } from "react";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const {cart ,setCart} = useContext(CartContext);

  return (
    <nav>
      <div className="top-nav">
        <p className="logo" onClick={()=>navigate("/")}>LOGO</p>

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div className="user-nav">
          <i className="fas fa-user"></i>
          <i className="fas fa-heart"></i>
          <a onClick={()=>navigate('/cart')}>
            <i className="fas fa-shopping-cart">
              <span id="cart">{cart.length > 0 ? cart.length : 0}</span>
            </i>
          </a>
        </div>
      </div>
      <div className="divider"></div>

      <div className="category-nav">
        <a className="category-item" href="#">
          Fashion
        </a>
        <a className="category-item" href="#">
          Electronics
        </a>
        <a className="category-item" href="#">
          Home
        </a>
        <a className="category-item" href="#">
          Books
        </a>
        <a className="category-item" href="#">
          Toys
        </a>
        <a className="category-item" href="#">
          Sports
        </a>
        <a className="category-item" href="#">
          Beauty
        </a>
      </div>

      <div className="divider"></div>
    </nav>
  );
}
