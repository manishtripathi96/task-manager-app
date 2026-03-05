
let addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', function(){
    let text = document.getElementById('newTask').value;
    let newItem = document.createElement('li');
    newItem.textContent = text;
    let taskList = document.getElementById('list');
    taskList.appendChild(newItem);
})