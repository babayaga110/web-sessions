import React from "react";

function Navbar() {
  return (
    <nav>
      <div class="top-nav">
        <p class="logo">LOGO</p>

        <div class="search-box">
          <input type="text" placeholder="Search" />
          <i class="fas fa-search"></i>
        </div>
        <div class="user-nav">
          <i class="fas fa-user"></i>
          <i class="fas fa-heart"></i>
          <a href="/cart.html">
            {" "}
            <i class="fas fa-shopping-cart">
              <span id="cart">0</span>
            </i>
          </a>
        </div>
      </div>

      <div class="divider"></div>

      <div class="category-nav">
        <a class="category-item" href="#">
          Fashion
        </a>
        <a class="category-item" href="#">
          Electronics
        </a>
        <a class="category-item" href="#">
          Home
        </a>
        <a class="category-item" href="#">
          Books
        </a>
        <a class="category-item" href="#">
          Toys
        </a>
        <a class="category-item" href="#">
          Sports
        </a>
        <a class="category-item" href="#">
          Beauty
        </a>
      </div>

      <div class="divider"></div>
    </nav>
  );
}

export default Navbar;
