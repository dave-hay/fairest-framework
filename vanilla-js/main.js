const totalTime = document.getElementById("total-time");
const totalItems = document.getElementById("total-items");
const form = document.getElementById("add");
const todoListEl = document.querySelector(".todos");

let allTodos = [];

const render = () => {
  todoListEl.innerHTML = ""; // clear
  allTodos.forEach((item, i) => {
    item.setAttribute("id", `${i}`);
    todoListEl.appendChild(item);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.elements["input-text"].value !== "") {
    createTodo(form.elements["input-text"].value);
    form.elements["input-text"].value = "";
    render();
  }
});

// store as object?
// creates a single todo
function createTodo(text) {
  const newItem = document.createElement("li");
  newItem.classList.add("todo");
  newItem.innerHTML = `
<input name='completed' type='checkbox'>
<span>${text}</span>
<button name='delete'>X</button>
`;
  newItem.addEventListener("click", handleClickTodoItem);
  allTodos.push(newItem);
}

const handleClickTodoItem = (e) => {
  let item = e.target.parentNode;
  let id = item.id;

  if (e.target.name === "completed") {
    item.style.textDecoration =
      item.style.textDecoration === "line-through" ? "none" : "line-through";
  }

  if (e.target.name === "delete") {
    allTodos.splice(+id, 1);
  }

  render();
};

function handleClick(num) {
  let text = form.elements["input-text"].value;
  if (text === "") return;
  // loop and create todo
  let i = 0;
  const t0 = performance.now();
  while (i < num) {
    createTodo(text);
    i++;
  }
  form.elements["input-text"].value = "";
  render();
  const t1 = performance.now();
  let time = t1 - t0;
  totalTime.innerText =
    time < 1000 ? time.toFixed(3) + " ms" : time / 1000 + " s";
  totalItems.innerText = allTodos.length.toString();
}

// add one
const addOne = document.getElementById("addOne");
addOne.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick(1);
});

// add 5K items
const button1K = document.getElementById("add5k");
button1K.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick(1000);
});

// add 5K items
const button5K = document.getElementById("add5k");
button5K.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick(5000);
});

// add 10K items
const button10K = document.getElementById("add10k");
button10K.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick(10000);
});

// add 50K items
const button50K = document.getElementById("add10k");
button50K.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick(10000);
});

// add 100K items
const button100K = document.getElementById("add100k");
button100K.addEventListener("click", (e) => {
  e.preventDefault();
  handleClick(100000);
});
