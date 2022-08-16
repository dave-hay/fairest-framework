<script>

  let newTodo = '';

  let todoList = [];

  function addToList() {
    todoList = [...todoList, {text: newTodo, status: false}];
    newTodo = '';
  }
  
</script>


<input bind:value={newTodo} type="text" placeholder="new todo item..">
<button on:click={addToList}>Add</button>

<br/>
{#each todoList as item, index}
  <input bind:checked={item.status} type="checkbox">
  <span class:checked={item.status}>{item.text}</span>
  <br/>
{/each}


<style>
</style>
