<script>

let id = 0;

export default {
  name: 'App',
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'item 1' },
        { id: id++, text: 'item 2' },
        { id: id++, text: 'item 3' },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = '';
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
    add10K() {
      for (let i = 0; i < 10000; i++) {
        this.todos.push({ id: id++, text: this.newTodo });
      }
      this.newTodo = '';
    },
  },
};
</script>

<template>
  <h1>My Todos</h1>
  <form @submit.prevent='addTodo'>
    <input v-model='newTodo'>
    <button>Add Todo</button>
    <button @click='add10K'>Add 10K</button>
  </form>
  <ul>
    <li v-for='todo in todos' :key='todo.id'>
      {{ todo.text }}
      <button @click='removeTodo(todo)'>x</button>
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
}
</style>
