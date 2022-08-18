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
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>My Todos</h1>
  <p>Total Time: {{ totalTime }}</p>
  <p>Total Items: {{ totalItems }}</p>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button @click="addXItems(1)">Add 1</button>
    <button @click="addXItems(1000)">Add 1K</button>
    <button @click="addXItems(5000)">Add 5K</button>
    <button @click="addXItems(10000)">Add 10K</button>
    <button @click="addXItems(50000)">Add 50K</button>
    <button @click="addXItems(100000)">Add 100K</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.status" />
      <span :class="{ checked: todo.status }">{{ todo.text }}</span>
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
.checked {
  text-decoration: line-through;
}
</style>
