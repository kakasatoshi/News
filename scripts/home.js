"use strict";
const str = "USER_ARRAY";
const strUser = "currentUser";
const user = getFromStorage(strUser, false);

console.log(user);
const wcMessage = document.getElementById("welcome-message");
const divLogIn = document.getElementById("login-modal");
const divLogOut = document.getElementById("main-content");
const btnLogOut = document.getElementById("btn-logout");
////////////////win load/////////////////////////////////////

window.addEventListener("load", function () {
  divLogIn.classList.add("hidden");
  divLogOut.classList.add("hidden");
  if (user === false) {
    divLogIn.classList.remove("hidden");
  } else {
    divLogOut.classList.remove("hidden");
    const classUser = parseUser(JSON.parse(user));
    console.log(classUser);
    wcMessage.textContent = "WellCome " + classUser.firstName;
  }
});

///////////////click Log out
// const tb = btnLogOut.click(function () {
//   divLogIn.classList.remove("hidden");
//   divLogOut.classList.add("hidden");
//   removeItem(strUser);
//   localStorage.clear();
// });
btnLogOut.addEventListener("click", function () {
  divLogIn.classList.remove("hidden");
  divLogOut.classList.add("hidden");
  localStorage.removeItem(strUser);
  //   localStorage.clear();
});
const btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", function () {
  saveToStorage("trang", "../index.html");
});
