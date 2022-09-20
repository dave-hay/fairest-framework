<script>
let logo = "logo.png"
  let newItem = '';
  let todoList = [];
  let totalTime = '0';
  let totalItems = '0';

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
      if (i % 10) console.log(i);
    }
    newItem = '';
    const t1 = performance.now();
    let time = (t1 - t0);
    totalTime = time < 1000 ? time.toFixed(3) + " ms" : (time / 1000) + " s"
    totalItems = todoList.length;
  }
</script>

<div id="container">
<div class="header">
<h1>Svelte Todo List</h1>
<img class="logo" src={logo} alt="logo">
<div class="results-container">
<p>Total time: <span class="results">{totalTime}</span></p>
<p>Total time: <span class="results">{totalItems}</span></p>
</div>
</div>

<div id="add">
<div class="input-container">
<input id="input-text" bind:value={newItem} type='text' placeholder='new todo item..'>
</div>
<div class="todo-buttons">
<button class="add-todo-button" on:click={() => addXToList(1)}>Add</button>
<button class="add-todo-button" on:click={() => addXToList(1000)}>Add1K</button>
<button class="add-todo-button" on:click={() => addXToList(5000)}>Add5K</button>
<button class="add-todo-button" on:click={() => addXToList(10000)}>Add10K</button>
<button class="add-todo-button" on:click={() => addXToList(100000)}>Add100K</button>
</div>
</div>

<ul class="todos">
{#each todoList as item, index}
  <input bind:checked={item.status} type='checkbox'>
  <span class:checked={item.status}>{item.text}</span>
  <button on:click={() => removeFromList(index)}>X</button>
{/each}
</ul>

</div>

<style>
    .checked {
        text-decoration: line-through;
    }
</style>
