"use strict";
class Task {
  constructor(tank, owner, isDone) {
    this.task = tank;
    this.owner = owner;
    this.isDone = isDone;
  }
}
let todoArr = [
  new Task("HouseKeeping", "user", true),
  new Task("Go to Shopping", "admin", false),
  new Task("homework", "admin", true),
  new Task("Cooking", "user", false),
];
let h = getFromStorage("todoArr", true);
if (h === true) {
  saveToStorage("todoArr", JSON.stringify(todoArr));
}
//
const strUser = "currentUser";
const inputTank = document.getElementById("input-task");
const btnAddTask = document.getElementById("btn-add");
const user = parseUser(JSON.parse(getFromStorage(strUser, "[]")));
const onOROff = getFromStorage(strUser, false);
const owner = user.username;

btnAddTask.addEventListener("click", () => {
  if (inputTank.value === "") {
    alert("Enter your Task");
  } else if (!onOROff) {
    saveToStorage("trang", "../pages/todo.html");
    window.location.href = "../pages/login.html";
  } else {
    let newTask = new Task(inputTank.value, owner, false);
    let arr = parseTodo(JSON.parse(getFromStorage("todoArr", "[]")));
    arr.push(newTask);
    saveToStorage("todoArr", JSON.stringify(arr));
  }
  let arr = parseTodo(JSON.parse(getFromStorage("todoArr", "[]")));
  let arrNew = arr.filter((todo) => todo.owner === user.username);
  showListTodo(arrNew);
});
window.addEventListener("load", () => {
  let arr = parseTodo(JSON.parse(getFromStorage("todoArr", "[]")));
  arr = arr.filter((todo) => todo.owner === user.username);
  showListTodo(arr);
});
//
// checkBox.addEventListener("change",()=>{

// })
