import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalItems, setTotalItems] = useState("");

  const addXItems = (num) => {
    const t0 = performance.now();
    const newItems = [];
    for (let i = 0; i < num; i++) {
      newItems.push(newTodo);
    }
    setTodos([...todos, ...newItems]);
    const t1 = performance.now();
    const time = (t1 - t0);
    const toWrite = `${num}: ${time} ms`
    console.log(toWrite);
    const totalTime = time < 1000 ? time.toFixed(3) + " ms" : (time / 1000).toFixed(2) + " s"
    setTotalTime(`${totalTime}`);
    setTotalItems(+totalItems + num);
  };

  return (
    <div>
      <div>
        <h1>My Todos</h1>
        <p>Total Time: {totalTime}</p>
        <p>Total Items: {totalItems}</p>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="button" onClick={(e) => {
          e.preventDefault();
          addXItems(1);
        }}>Add</button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addXItems(10000);
          }}
        >
          Add 10K
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => <li>{todo}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
