document.getElementById("log-out").addEventListener("click", function () {
  // Remove only the loggedInUser from localStorage
  localStorage.removeItem("loggedInUser");

  window.location.href = "index.html";
});
