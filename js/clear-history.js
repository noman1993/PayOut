import { loadUsersFromStorage, saveUsersInStorage } from "./user-module.js";

document
  .getElementById("history-clear-btn")
  .addEventListener("click", function () {
    // get logged in user

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      //get the whole storage
      let users = loadUsersFromStorage();

      // get the current user
      const currentUser = users.find(
        (user) => user.phone === loggedInUser.phone
      );

      if (currentUser) {
        currentUser.transactions = [];
        saveUsersInStorage(users); // transactions history will be empty
      }

      // clear history in the DOM

      document.getElementById("history-section").innerHTML = "";
      alert("History cleared");
    }
  });
