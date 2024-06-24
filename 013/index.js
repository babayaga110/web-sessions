const productsContainer = document.getElementById("products");
let cartItems = [];
const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return response;
};

const displayProducts = async () => {
  const products = await getProducts();

  products.forEach(product => {
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

  document.querySelectorAll('.add-to-cart').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      cartItems.push(products[index]);
      console.log(cartItems);
    });
  });
};

displayProducts();

// const displayProducts = async () => {
//   const products = await getProducts();

//   let i = 0;
//   while (i < products.length) {
//     const product = products[i];
//     const productCard = `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.title}">
//         <div class="product-info">
//           <h3>${product.title}</h3>
//           <p>${product.description}</p>
//           <p>Price: <span>$${product.price}</span></p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//     `;

//     productsContainer.innerHTML += productCard;
//     i++;
//   }
// };

// displayProducts();

// const displayProducts = async () => {
//   const products = await getProducts();

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const productCard = `
//       <div class="product-card">
//         <img src="${product.image}" alt="${product.title}">
//         <div class="product-info">
//           <h3>${product.title}</h3>
//           <p>${product.description}</p>
//           <p>Price: <span>$${product.price}</span></p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//     `;

//     productsContainer.innerHTML += productCard;
//   }
// };

// displayProducts();