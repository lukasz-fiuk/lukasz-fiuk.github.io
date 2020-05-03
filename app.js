// Selectors
const formBtn = document.querySelector(".form__button");
const checkBtn = document.querySelector(".list__todo");
const listContainer = document.querySelector(".list");
const listTodoP = document.querySelector(".list__todo__p");
const listTodoComplete = document.getElementsByClassName(
  "list__todo__complete"
);
let formInput = document.querySelector(".form__input");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
formBtn.addEventListener("click", addTodo);
listContainer.addEventListener("click", action);

// Functions
function addTodo(event) {
  event.preventDefault();
  const newTodo = document.createElement("div");
  todoInput = formInput.value;

  saveTodos(todoInput);

  formInput.value = "";
  newTodo.classList.add("list__todo");
  newTodo.innerHTML = ` 
<button class="list__todo__complete"></button>
<p class="list__todo__p">${todoInput}</p>
<button class="list__todo__delete"></button>
</div>`;
  listContainer.appendChild(newTodo);
}

// Delete & Mark Todos
function action(event) {
  const click = event.target;
  const todo = click;

  if (click.classList[0] === "list__todo__complete") {
    click.parentElement.classList.toggle("--checked");
    click.classList.toggle("--checkedBtn");

    console.log("Checked");
  } else if (click.className === "list__todo__delete") {
    click.parentElement.classList.add("del");
    removeLocalTodos(todo);
    click.parentElement.addEventListener("animationend", (event) => {
      click.parentElement.remove();
    });
    console.log("Deleted");
  }
}

// Local Storage

function saveTodos(todoItem) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todoItem);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    event.preventDefault();
    const newTodo = document.createElement("div");
    todoInput = todo;

    newTodo.classList.add("list__todo");
    newTodo.innerHTML = ` 
      <button class="list__todo__complete"></button>
      <p class="list__todo__p">${todoInput}</p>
      <button class="list__todo__delete"></button>
      </div>`;
    listContainer.appendChild(newTodo);
  });
}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    
const todoIndex = todo.parentElement.children[1].innerText;
console.log(todoIndex)
todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}


function checkLocal(){

    if(localStorage.getItem('todos') === null){
        return todos = [];
    }else{
       return  todos= JSON.parse(localStorage.getItem('todos'));
    }

}
