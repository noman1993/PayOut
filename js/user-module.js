function saveUsersInStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsersFromStorage() {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
}

let users = loadUsersFromStorage();

function registerUser(phone, pin) {
  const existUser = users.some((user) => user.phone === phone);

  if (existUser) {
    alert("user already exist, try with another phone number");
    return false;
  }

  users.push({ phone, pin, balance: 0, transactions: [] });
  saveUsersInStorage(users);
  return true;
}

function loginUsers(phone, pin) {
  return users.find((user) => user.phone === phone && user.pin === pin);
}

export { registerUser, loginUsers, saveUsersInStorage, loadUsersFromStorage };
