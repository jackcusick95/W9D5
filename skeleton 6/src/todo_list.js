let todos = [];
const myStorage = window.localStorage;

const todoUL = document.querySelector(".todos");
const addTodoForm = document.querySelector(".add-todo-form");

function addTodo() {
  addTodoForm.addEventListener("submit", event => {
    event.preventDefault();
    
    let input = document.querySelector("[name='add-todo']");
    let todo = {
      value: input.value,
      done: false,
    }
    todos.push(todo);
    myStorage.setItem('todos',todos.toString());
    input.value = "";
    populateList();
  });
}

function populateList() {
  todos = myStorage.getItem("todos").split(",")
  for(let todo of todos) {
    let ulChildren = Array.from(todoUL.children);
    if (ulChildren.length) {
      ulChildren.forEach((label) => {
        label.remove();
      })
    }
    let label = document.createElement("label");
    label.textContent = todo.value;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    label.appendChild(checkbox);
    todoUL.appendChild(label);
  }
}

addTodo();

