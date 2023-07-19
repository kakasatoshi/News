"use strict";
const inputUser = document.getElementById("input-username");
const inputPw = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");
const str = "USER_ARRAY";
const strUser = "currentUser";
let arr = [];
let userArr = [];
let userData;
let a = [
  { firstName: "John", lastName: "Doe", username: "user", password: "123456" },
  { firstName: "Jane", lastName: "Smith", username: "admin", password: "1" },
];
const trang = getFromStorage("trang", "../index.html");
//////////////
window.addEventListener("load", function () {
  arr = JSON.parse(getFromStorage(str, false)) || a;
  for (let i = 0; i < arr.length; i++) {
    userArr.push(parseUser(arr[i]));
  }
  console.log(userArr);
});
btnSubmit.addEventListener("click", function (e) {
  const user = inputUser.value;
  const password = inputPw.value;
  userData = userArr.find((arr) => arr.username === user);
  if (user === null || user === "") {
    alert("Please enter a username.");
  } else if (password === null || password === "") {
    alert("Please enter your Password.");
  } else if (!findUser(user, userArr)) {
    alert("User ko dc tìm thấy");
  } else if (!findpw(password, userData)) {
    alert("Password không đúng");
  } else {
    alert("Đăng Nhập Thành Công");
    saveToStorage(strUser, JSON.stringify(userData));
    window.location.href = `${trang}`; //đưa về trang chủ
  }
});
