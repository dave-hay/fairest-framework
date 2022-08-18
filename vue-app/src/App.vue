<script>
let id = 0;
/* let totalTime = 0;
let totalItems = 0; */

export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todos: [],
      totalTime: "0 ms",
      totalItems: 0,
    };
  },
  methods: {
    addXItems(num) {
      let t0 = performance.now();
      for (let i = 0; i < num; i++) {
        this.todos.push({ id: id++, text: this.newTodo, status: false });
      }
      this.newTodo = "";
      let t1 = performance.now();
      let time = t1 - t0;
      this.totalTime =
        time < 1000 ? time.toFixed(3) + " ms" : time / 1000 + " s";
      this.totalItems = this.todos.length;
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>

<template>
  <h1>My Todos</h1>
  <p>Total Time: {{ totalTime }}</p>
  <p>Total Items: {{ totalItems }}</p>
  <form @submit.prevent="addTodo">
    <input class="todo-input" v-model="newTodo" />
    <div class="todo-buttons">
      <button @click="addXItems(1)">Add 1</button>
      <button @click="addXItems(1000)">Add 1K</button>
      <button @click="addXItems(5000)">Add 5K</button>
      <button @click="addXItems(10000)">Add 10K</button>
      <button @click="addXItems(50000)">Add 50K</button>
      <button @click="addXItems(100000)">Add 100K</button>
    </div>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.status" />
      <span class="text" :class="{ checked: todo.status }">{{
        todo.text
      }}</span>
      <button class="button" @click="removeTodo(todo)">x</button>
    </li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #42b983; /* Green */
  display: flex;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
}
.button {
  background-color: transparent; /* Green */
  border: none;
  color: white;
  padding: 0px 3px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
.todo-input {
  margin: 0 auto;
}

.todo-buttons {
  margin: 1rem;
}

.todo-buttons button {
  margin: 0 2px;
  background-color: #42b983; /* Green */
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 5px 10px;
}

.text {
  margin: 0px 10px;
}
.checked {
  text-decoration: line-through;
}
</style>
