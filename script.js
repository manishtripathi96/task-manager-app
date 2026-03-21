let inputElement = document.getElementById("newTask");
let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("list");

function addTask() {
  let text = inputElement.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }
  let newItem = document.createElement("li");
  newItem.innerHTML = text + " <button>Delete</button>";
  taskList.appendChild(newItem);

  inputElement.value = "";
}

addTaskBtn.addEventListener("click", addTask);

inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
