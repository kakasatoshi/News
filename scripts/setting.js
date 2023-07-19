"use strict";
const inputPS = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSave = document.getElementById("btn-submit");

btnSave.addEventListener("click", () => {
  if (!inputPS.value || inputPS.value < 1) {
    alert("Please enter a page size.");
  } else {
    saveToStorage("pageSize", JSON.stringify(inputPS.value));
    saveToStorage("category", JSON.stringify(inputCategory.value));
    alert("Save is success");
    window.location.href = "../pages/news.html";
  }
});
