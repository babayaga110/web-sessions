const list = document.getElementById("list");
const array = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < array.length; i++) {
  const item = document.createElement("p");
  item.innerText = array[i];
  list.appendChild(item);
}
