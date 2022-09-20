<script>
let id = 0;

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
  <div id="container">
    <div class="header">
      <h1>My Todos</h1>
      <img class="logo" src="./assets/logo.png" alt="logo" />
      <div class="results-container">
        <p>
          Total Time: <span class="results">{{ totalTime }}</span>
        </p>
        <p>
          Total Items: <span class="results">{{ totalItems }}</span>
        </p>
      </div>
    </div>
    <form id="add" @submit.prevent="addTodo">
      <div class="input-container">
        <input id="input-text" v-model="newTodo" />
      </div>
      <div class="todo-buttons">
        <button class="add-todo-button" @click="addXItems(1)">Add 1</button>
        <button class="add-todo-button" @click="addXItems(1000)">Add 1K</button>
        <button class="add-todo-button" @click="addXItems(5000)">Add 5K</button>
        <button class="add-todo-button" @click="addXItems(10000)">
          Add 10K
        </button>
        <button class="add-todo-button" @click="addXItems(50000)">
          Add 50K
        </button>
        <button class="add-todo-button" @click="addXItems(100000)">
          Add 100K
        </button>
      </div>
    </form>
    <ul class="todos">
      <li class="todo" v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.status" />
        <span class="text" :class="{ checked: todo.status }">{{
          todo.text
        }}</span>
        <button class="button" @click="removeTodo(todo)">x</button>
      </li>
    </ul>
  </div>
</template>

<style>
@import "./styles.css";
</style>
