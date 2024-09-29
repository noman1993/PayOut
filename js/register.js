import { registerUser } from "./user-module.js";

document
  .getElementById("reg-login-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const phoneNumber = getInputValueById("reg-phone-number");
    const pinNumber = getInputValueById("reg-pin-number");

    // validation Phone and pin

    const ValidatePhone = isValidPhoneNumber(phoneNumber);
    const ValidatePin = isValidatePinNumber(pinNumber);

    if (!ValidatePhone) {
      alert("provide a valid phone Number");
      return;
    }

    if (!ValidatePin) {
      alert(
        "provide a pin with minimum 5 characters including letter,symbol and number"
      );
      return;
    }

    // Registered the user

    const isRegistered = registerUser(phoneNumber, pinNumber);

    if (isRegistered) {
      alert("Registration successful");

      window.location.href = "index.html";

      clearFormsInput("reg-form");
    }
  });

document
  .getElementById("register-log-button")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });
