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
      this.newItemArray.push(this._newTodo(this.text));
    }
  }

  _newTodo(text) {
    const newItem = document.createElement('li');
    newItem.classList.add('todo');
    newItem.textContent = text;
    return newItem;
  }

}

export default Todos;