import Todos from './todos.js';

const totalTime = document.getElementById('total-time');
const totalItems = document.getElementById('total-items');
const form = document.getElementById('add');

let totalTodos = 0;

function handleClick(num, text) {
  const td = new Todos(num, text)
  td.makeTodos()
  totalTime.innerText = td.time
  totalTodos += num;
  totalItems.innerText = totalTodos
}

// add one
const addOne = document.getElementById('addOne');
addOne.addEventListener('click', e => {
  e.preventDefault();
  handleClick(1, form.elements['input-text'].value)
});

// add 10K items
const button10K = document.getElementById('add10k');
button10K.addEventListener('click', e => {
  e.preventDefault();
  handleClick(10000, form.elements['input-text'].value)
});

// add 100K items
const button100K = document.getElementById('add100k');
button100K.addEventListener('click', e => {
  e.preventDefault();
  handleClick(100000, form.elements['input-text'].value)
});


// add 500K items
const button500k = document.getElementById('add500k');
button500k.addEventListener('click', e => {
  e.preventDefault();
  handleClick(500000, form.elements['input-text'].value)
});
