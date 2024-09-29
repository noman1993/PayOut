import { loadUsersFromStorage, saveUsersInStorage } from "./user-module.js";

// load balance and transaction history when the page load

document.addEventListener("DOMContentLoaded", function () {
  // get the loggedIn user
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    let users = loadUsersFromStorage();

    const currentUser = users.find((user) => user.phone === loggedInUser.phone);

    if (currentUser) {
      //load balance amount from storage
      document.getElementById("balance").innerText = currentUser.balance;

      // clear the existing history
      const historySection = document.getElementById("history-section");
      historySection.innerHTML = "";

      //load history from storage
      currentUser.transactions.forEach((transaction) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3 class='text-amber-400 text-xl'>${transaction.type}</h3>
            <p>${transaction.type} ${transaction.amount} taka, New-balance ${currentUser.balance} taka, on Date ${transaction.date}</p>
        `;

        historySection.appendChild(div);
      });
    }
  }
});

document.getElementById("add-button").addEventListener("click", function (e) {
  e.preventDefault();

  const addAmount = parseFloat(getInputValueById("add-amount"));
  const pin = getInputValueById("add-pin-number");

  //get logged in user

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    alert("There is no logged in user");
    return;
  }

  // get the current user
  let users = loadUsersFromStorage();
  const currentUser = users.find((user) => user.phone === loggedInUser.phone);
  if (!currentUser) {
    alert("There is no current user");
  }

  if (pin === currentUser.pin) {
    const newBalance = currentUser.balance + addAmount;
    currentUser.balance = newBalance;

    //save the transactions in local storage
    const transaction = {
      type: "cash-in",
      amount: addAmount,
      balance: currentUser.balance,
      date: new Date().toLocaleString(),
    };

    // add transaction to user history
    currentUser.transactions.push(transaction);

    // save information in local storage
    saveUsersInStorage(users);

    // show in the balance section
    document.getElementById("balance").innerText = newBalance;

    // show in the transaction history section
    const div = document.createElement("div");
    div.innerHTML = `
            <h3 class='text-amber-400 text-xl'>${transaction.type}</h3>
            <p>${transaction.type} ${addAmount} taka, New-balance ${newBalance} taka, on Date ${transaction.date}</p>
        `;

    document.getElementById("history-section").appendChild(div);
  } else {
    alert("provide a valid pin");
  }

  clearFormsInput("add-form");
});
