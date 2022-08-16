import Todos from './todos.js';

const totalTime = document.getElementById('total-time');
const totalItems = document.getElementById('total-items');
const form = document.getElementById('add');
const todoListEl = document.querySelector('.todos');

let todoListCount = 0;
let allTodos = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo(form.elements['input-text'].value)
  render()
})

// creates a single todo
function createTodo(text) {
  const newItem = document.createElement('li');
  newItem.classList.add('todo');
  newItem.innerHTML = `
<input name='completed' type='checkbox'> 
<span>${text}</span>
<button name='delete'>X</button>
`;
  newItem.addEventListener('click', handleClickTodoItem)
  allTodos.push(newItem)
}

const render = () => {
  todoListEl.innerHTML = ''; // clear
  allTodos.forEach((item, i) => {
    item.classList.add(`${i}`)
    todoListEl.appendChild(item)
  })
}

const handleClickTodoItem = (e) => {
  let item = e.target.parentNode;
  let id = e.target.id;
  if (e.target.name === 'completed') {
    item.style.textDecoration = item.style.textDecoration === 'line-through' ?
      'none' :
      'line-through';
  }

  if (e.target.name === 'delete') {
    allTodos.splice(+id, 1)
  }

  render()
};


function handleClick(num, text) {
  const td = new Todos(num, text);
  td.makeTodos();
  totalTime.innerText = td.time;
  todoListCount += num;
  totalItems.innerText = todoListCount;
}

// add one
const addOne = document.getElementById('addOne');
addOne.addEventListener('click', e => {
  e.preventDefault();
  createTodo(form.elements['input-text'].value)
  render()

/*
    handleClick(1, form.elements['input-text'].value);
*/
});

// add 10K items
const button10K = document.getElementById('add10k');
button10K.addEventListener('click', e => {
  e.preventDefault();
  handleClick(10000, form.elements['input-text'].value);
});

// add 100K items
const button100K = document.getElementById('add100k');
button100K.addEventListener('click', e => {
  e.preventDefault();
  handleClick(100000, form.elements['input-text'].value);
});

// add 500K items
const button500k = document.getElementById('add500k');
button500k.addEventListener('click', e => {
  e.preventDefault();
  handleClick(500000, form.elements['input-text'].value);
});
