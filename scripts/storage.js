"use strict";
///// Hàm lưu thông tin vào storage https://www.youtube.com/watch?v=okDgLkkUGIA
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key, defaultValue) {
  return localStorage.getItem(key) ?? defaultValue;
}
// let petArr = JSON.parse(getFromStorage("petArr")) ?? [];

function arrTostring(arr = []) {
  return JSON.stringify(arr);
}

function stringToArr(str = "") {
  return JSON.parse(str);
}
