const todoList = document.querySelector('.todos');
const totalTime = document.getElementById('total-time');
const totalItems = document.getElementById('total-items');
const form = document.getElementById('add');

let totalTodos = 0;

// func create new todo
function createTodo(text) {
  const newItem = document.createElement('li');
  newItem.setAttribute('id', `${totalTodos}`);
  newItem.classList.add('todo');
  newItem.textContent = text;
  todoList.appendChild(newItem);
  totalTodos++;
  // todoItems.push(inputText)
}

// add X item
const addXItems = (num) => {
  const txt = form.elements['input-text'].value;
  const t0 = performance.now();
  for (let i = 0; i < num; i++) {
    createTodo(txt);
  }
  const t1 = performance.now();
  const time = (t1 - t0) / 1000;
  totalTime.innerText = `${time.toFixed(3)} seconds`;
  totalItems.innerText = totalTodos.toString()
};

// TODO: delete li on checkbox click

// add one
const addOne = document.getElementById('addOne');
addOne.addEventListener('click', e => {
  e.preventDefault();
  addXItems(1);
});

// add 10K items
const button10K = document.getElementById('add10k');
button10K.addEventListener('click', e => {
  e.preventDefault();
  addXItems(10000);
});

// add 10K items
const button100K = document.getElementById('add100k');
button100K.addEventListener('click', e => {
  e.preventDefault();
  addXItems(100000);
});


// add 10K items
const button500k = document.getElementById('add500k');
button500k.addEventListener('click', e => {
  e.preventDefault();
  addXItems(500000);
});
