const productsContainer = document.getElementById("products");
const cartValue = document.getElementById("cart");

let cartList = [];
const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response;
};

const displayProducts = async () => {
  const products = await getProducts();

  // forEach loop

  products.forEach((product) => {
    const productCard = `
    <div class="product-card">
    <img src="${product.image}" alt="${product.title}">
    <div class="product-info">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price: <span>$${product.price}</span></p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
    `;
    productsContainer.innerHTML += productCard;
  });

  document.querySelectorAll(".add-to-cart").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      cartList.push(products[index]);
      cartValue.textContent = cartList.length;
      window.localStorage.setItem("cartList", JSON.stringify(cartList));
      console.log(cartList);
    });
  }
  );

};

displayProducts();

