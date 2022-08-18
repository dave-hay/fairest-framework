<script>
let id = 0;

export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
    addXItems(num) {
      for (let i = 0; i < num; i++) {
        this.todos.push({ id: id++, text: this.newTodo });
      }
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>My Todos</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
    <button @click="addXItems(1000)">Add 1K</button>
    <button @click="addXItems(5000)">Add 5K</button>
    <button @click="addXItems(10000)">Add 10K</button>
    <button @click="addXItems(50000)">Add 50K</button>
    <button @click="addXItems(100000)">Add 100K</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">x</button>
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
a {
  color: #42b983;
}
</style>
