let inputElement = document.getElementById("newTask");
let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("list");
let searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchTask);

function searchTask() {
  let searchValue = searchInput.value.toLowerCase();

  let allTasks = taskList.children;

  for (let i = 0; i < allTasks.length; i++) {
    let task = allTasks[i];
    let taskTextSpan = task.querySelector("span");
    let taskText = taskTextSpan.textContent.toLowerCase();

    if (taskText.includes(searchValue)) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  }
}

function addTask() {
  let text = inputElement.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }

  let newItem = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
      taskText.style.textDecoration = "line-through";
    } else {
      taskText.style.textDecoration = "none";
    }
  });
  let taskText = document.createElement("span");
  taskText.textContent = text + " ";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    newItem.remove();
  });

  newItem.appendChild(checkBox);
  newItem.appendChild(taskText);
  newItem.appendChild(deleteBtn);
  taskList.appendChild(newItem);

  inputElement.value = "";
}

addTaskBtn.addEventListener("click", addTask);

inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
