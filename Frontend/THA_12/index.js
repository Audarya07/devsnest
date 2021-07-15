const todo = [];
const task = document.getElementById("task");
const addBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");

addBtn.addEventListener("click", addTodo);

task.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      addTodo();
    }
});

function addTodo(){
    const todoText = document.getElementById("task").value;
    if(todoText == ""){
        alert("Please enter some task");
    }else{
        const todoObject = {
            id: todo.length,
            todoText: todoText,
            isDone: false
        };
        todo.unshift(todoObject);
    }
    showTodo();
}

function showTodo(){
    taskContainer.innerHTML = "";
    document.getElementById("task").value = "";
    todo.forEach((item) => {
        const newItem = document.createElement("li");
        newItem.innerHTML = item.todoText;
        newItem.setAttribute("data-id", item.id);
        
        const deleteBtn = document.createElement("i");
        deleteBtn.setAttribute("data-id", item.id);
        deleteBtn.classList.add("fas");
        deleteBtn.classList.add("fa-trash-alt");
        
        if (item.isDone) {
            newItem.classList.add("done");
        }
        
        newItem.addEventListener("click", (e) => {
            const currId = e.target.getAttribute("data-id");
            doneTodo(currId);
        });
        
        deleteBtn.addEventListener("click", (e) => {
            const deleteId = e.target.getAttribute("data-id");
            deleteItem(deleteId);
        });
        
        taskContainer.appendChild(newItem);
        newItem.appendChild(deleteBtn);
    });
}

function doneTodo(selectedId) {
    const index = todo.findIndex((item) => item.id == selectedId);

    if(todo[index].isDone){
        todo[index].isDone = false;
    }else {
        todo[index].isDone = true;
    }
    showTodo();
}

function deleteItem(selectedId) {
    todo.splice(todo.findIndex((item) => item.id == selectedId), 1);
    showTodo();
}