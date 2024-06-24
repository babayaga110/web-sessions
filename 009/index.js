
const formButton = document.getElementById("submit");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");

formButton.addEventListener("click", function () {
  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    age: age.value,
  };
  console.log(userData);
});
