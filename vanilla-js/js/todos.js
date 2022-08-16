class Todos {
  time;
  constructor(num, text) {
    this.num = num;
    this.text = text;
    this.newItemArray = [];
  }

  makeTodos() {
    const todoList = document.querySelector('.todos');
    const t0 = performance.now();
    this._newArray()
    this.newItemArray.forEach((item) => {
      todoList.appendChild(item)
    })
    const t1 = performance.now();
    this.time = (t1 - t0) / 1000;
  }

  _newArray() {
    for (let i = 0; i < this.num; i++) {
      this.newItemArray.push(this._newTodo(this.text, i));
    }
  }

  _newTodo(text, index) {
    const newItem = document.createElement('li');

    const deleteTodo = (i) => {
      // delete global var

    }
    newItem.classList.add('todo');
    newItem.innerHTML = `<input onclick='' type='checkbox'> <span>${text}</span>`;
    return newItem;
  }

}

export default Todos;