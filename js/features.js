function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

function clearFormsInput(id) {
  const inputs = document.querySelectorAll(`#${id} input`);
  inputs.forEach((input) => {
    input.value = "";
  });
}

function sectionMove(id) {
  document.getElementById("add-form").classList.add("hidden");
  document.getElementById("out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");
  // open particuler section

  document.getElementById(id).classList.remove("hidden");
}

function isValidPhoneNumber(phone) {
  const phoneNumberRegex = /^01\d{9}$/;
  return phoneNumberRegex.test(phone);
}

function isValidatePinNumber(pin) {
  const pinNumberRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{5,}$/;
  return pinNumberRegex.test(pin);
}
