document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    sectionMove("add-form");
  });

document
  .getElementById("out-money-button")
  .addEventListener("click", function () {
    sectionMove("out-form");
  });

document.getElementById("transactions").addEventListener("click", function () {
  sectionMove("transaction-section");
});
