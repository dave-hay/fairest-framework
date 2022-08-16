<script>
  let newItem = '';

  let todoList = [];

  function addToList() {
    if (!newItem) return
    todoList = [...todoList, {text: newItem, status: false}];
    newItem = '';
  }

  function removeFromList(index) {
    todoList.splice(index, 1)
    todoList = todoList;
  }
</script>

<input bind:value={newItem} type="text" placeholder="new todo item..">
<button on:click={addToList}>Add</button>

<br/>
{#each todoList as item, index}
  <input bind:checked={item.status} type="checkbox">
  <span class:checked={item.status}>{item.text}</span>
  <button on:click={() => removeFromList(index)}>X</button>
  <br/>
{/each}


<style>
    .checked {
        text-decoration: line-through;
    }
</style>