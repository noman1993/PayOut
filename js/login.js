import { loginUsers } from "./user-module.js";
document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();

  const phoneNumber = getInputValueById("phone-number");
  const pinNumber = getInputValueById("pin-number");

  const user = loginUsers(phoneNumber, pinNumber);

  if (user) {
    // store the loggedIn user data in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    window.location.href = "home.html";

    clearFormsInput("login-form");
  } else {
    alert("provide valid information");
  }
});

document
  .getElementById("register-button")
  .addEventListener("click", function () {
    window.location.href = "register.html";
  });
