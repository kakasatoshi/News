// check hợp lệ for user
function validate(user, pws, arr) {
  console.log(user);
  if (user.firstName === "" || user.lastName === null) {
    alert("Enter firstName: ?");
    return false;
  } else if (user.lastName === "" || user.lastName === null) {
    alert("Enter Last Name:");
    return false;
  } else if (!checkID(arr, user.username)) {
    alert(`UserName must be unique !`);
    return false;
  } else if (user.password === "" || user.password === null) {
    alert("Enter Password");
  } else if (pws === "" || pws === null) {
    alert("Confirm password");
  } else if (user.password !== pws) {
    alert("Confirm password is not match");
    return false;
  } else {
    return true;
  }
}
// check id
function checkID(arr, id) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].username === id || id === null || id === "") {
      return false;
    }
  }
  return true;
}
// format date
function formatdate(date) {
  var day = String(date.getDate()).padStart(2, "0");
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var year = date.getFullYear();
  return day + "/" + month + "/" + year;
}

/////////////conver js Oject to class ///
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  );

  return user;
}
function findUser(str, arr) {
  let tr = arr.find((a) => a.username === str);
  return tr !== undefined ? true : false;
}

function findpw(password, userData) {
  return userData.password === password ? true : false;
}

function showListTodo(arr = []) {
  const listTodo = document.getElementById("todo-list");

  while (listTodo.firstChild !== null) {
    listTodo.removeChild(listTodo.lastChild);
  }
  arr.forEach((a) => {
    const li = document.createElement("li");

    // checkBox.setAttribute("type", "checkbox");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = a.isDone;
    checkBox.disabled = a.isDone;
    checkBox.classList.add("li-checkbox");
    checkBox.id = "checkbox-input";
    checkBox.addEventListener("change", () => {
      changeTodo(a, arr);
    });

    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.classList.add("close");
    btn.addEventListener("click", () => {
      deleteTaskFromArrAndDom(a, arr);
    });
    if (a.isDone) {
      li.classList.add("checked");
    }

    li.classList.add("li-todo", "li-news");
    li.textContent = a.task;
    li.appendChild(btn);
    listTodo.appendChild(checkBox);
    listTodo.appendChild(li);
  });
  function changeTodo(a, arr) {
    for (let index = 0; index < arr.length; index++) {
      if (
        arr[index].task === a.task &&
        arr[index].owner === a.owner &&
        arr[index].isDone === a.isDone
      ) {
        arr[index].isDone = true;
      }
    }
    saveToStorage("todoArr", JSON.stringify(arr));
    this.showListTodo(arr);
  }
  // saveToStorage("todoArr", JSON.stringify(arr));
}
function parseTodo(arr) {
  let array = [];
  arr.forEach((a) => {
    let b = new Task(a.task, a.owner, a.isDone);
    array.push(b);
  });
  return array;
}

function deleteTaskFromArrAndDom(a, arr) {
  for (let index = 0; index < arr.length; index++) {
    if (
      arr[index].task === a.task &&
      arr[index].owner === a.owner &&
      arr[index].isDone === a.isDone
    ) {
      arr.splice(index, 1);
    }
  }
  saveToStorage("todoArr", JSON.stringify(arr));
  this.showListTodo(arr);
}
