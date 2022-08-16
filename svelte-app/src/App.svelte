<script>
  let newItem = '';
  let todoList = [];
  let totalTime = '';
  let totalItems = '';

  function removeFromList(index) {
    todoList.splice(index, 1);
    todoList = todoList;
  }

  function addXToList(num) {
    if (!newItem) return;
    const t0 = performance.now();
    let i = 0;
    while (i < num) {
      todoList = [...todoList, { text: newItem, status: false }];
      i++;
    }
    newItem = '';
    const t1 = performance.now();
    totalTime = (t1 - t0);
    totalItems = todoList.length;
  }
</script>
<h1>Svelte Todo List</h1>
<p>{totalTime}</p>
<p>{totalItems}</p>

<br />

<input bind:value={newItem} type='text' placeholder='new todo item..'>
<button on:click={() => addXToList(1)}>Add</button>
<button on:click={() => addXToList(10000)}>Add10K</button>

<br />
{#each todoList as item, index}
  <input bind:checked={item.status} type='checkbox'>
  <span class:checked={item.status}>{item.text}</span>
  <button on:click={() => removeFromList(index)}>X</button>
  <br />
{/each}


<style>
    .checked {
        text-decoration: line-through;
    }
</style>