"use strict";
const inputFirstName = document.getElementById("input-firstname");
const inputLastName = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPWConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");

////tạo mãng để test

let USER_ARRAY = [
  new User("John", "Doe", "user", "123456"),
  new User("Jane", "Smith", "admin", "1"),
];
const str = "USER_ARRAY";
let userArr;
window.addEventListener("load", function () {
  userArr = JSON.parse(getFromStorage(str, false)) || USER_ARRAY;
  saveToStorage(str, JSON.stringify(userArr));
  console.log(JSON.stringify(userArr));
});

let user;
btnSubmit.addEventListener("click", function () {
  user = new User(
    inputFirstName.value,
    inputLastName.value,
    inputUsername.value,
    inputPassword.value
  );
  let inputPwF = inputPWConfirm.value;
  let checkUser = validate(user, inputPwF, userArr);
  if (checkUser) {
    alert("Tài khoản đăng nhập thành công");
    userArr.push(user);
    saveToStorage(str, JSON.stringify(userArr));
    window.location.href = "../pages/login.html";
  } else {
    alert("Thất Bại");
  }

  //   console.log(user, inputPwF);
});
// console.log(userArr);
