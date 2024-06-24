const cartList = document.getElementById("cartList")
const cartValue = document.getElementById("cart");
const displayTotal = document.getElementById("total");

let total = 0;

const displayCart =  () => {
  const products = JSON.parse(window.localStorage.getItem("cartList"));
    // forEach loop
  
    products.forEach((product) => {
      const productCard = `
      <div class="cart-item">
      <img src="${product.image}" alt="${product.title}">
      <div class="cart-item-details">
          <h4>${product.title}</h4>
          <p>${product.description}</p>
          <p>Price: <span>$${product.price}</span></p>
          <button class="remove">Remove</button>
      </div>
  </div>
      `;

      cartList.innerHTML += productCard;
    });

    cartValue.textContent = products.length;

    total = products.reduce((acc, product) => acc + product.price, 0);
    displayTotal.textContent = total;




    // document.querySelectorAll(".add-to-cart").forEach((btn, index) => {
    //   btn.addEventListener("click", () => {
    //     cartList.push(products[index]);
    //     cartValue.textContent = cartList.length;
    //     window.localStorage.setItem("cartList", JSON.stringify(cartList));
    //     console.log(cartList);
    //   });
    // }
    // );
  
  };
  
  displayCart();