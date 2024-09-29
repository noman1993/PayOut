import { loadUsersFromStorage, saveUsersInStorage } from "./user-module.js";

document.getElementById("out-button").addEventListener("click", function (e) {
  e.preventDefault();

  // get input Value
  const cashOutAmount = parseFloat(getInputValueById("out-amount"));
  const pin = getInputValueById("out-pin-number");

  // get LoggedIn user
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    alert("there is no logged in user");
    return;
  }

  let users = loadUsersFromStorage();
  // get current user

  const currentUser = users.find((user) => user.phone === loggedInUser.phone);
  if (!currentUser) {
    alert("there is no current user");
    return;
  }

  // make calculation

  if (pin === currentUser.pin) {
    if (currentUser.balance < cashOutAmount) {
      alert("you haven't enough money");
      return;
    }
    const newBalance = currentUser.balance - cashOutAmount;
    currentUser.balance = newBalance;

    //save the transactions in local storage
    const transaction = {
      type: "cash-out",
      amount: cashOutAmount,
      balance: currentUser.balance,
      date: new Date().toLocaleString(),
    };

    // save transaction in storage
    currentUser.transactions.push(transaction);

    saveUsersInStorage(users);

    //show the current balance

    document.getElementById("balance").innerText = newBalance;

    //show the transaction history

    const div = document.createElement("div");
    div.innerHTML = `
        <h3 class="text-xl text-red-400">${transaction.type}</h3>
        <p>${transaction.type} ${transaction.amount} taka, new-balance ${newBalance} taka on Date ${transaction.date} </p>
      `;
    document.getElementById("history-section").appendChild(div);
  } else {
    alert("provide valid pin");
  }

  clearFormsInput("out-form");
});
