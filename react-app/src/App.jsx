import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inp, setInp] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalItems, setTotalItems] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, inp]);
    setInp("");
  };

  const addXItems = (num) => {
    const t0 = performance.now();
    const newItems = [];
    for (let i = 0; i < num; i++) {
      newItems.push(inp);
    }
    setTodos([...todos, ...newItems]);
    const t1 = performance.now();
    const time = (t1 - t0) / 1000;
    setTotalTime(`${time.toFixed(3)} seconds`);
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
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button type="button" onClick={handleClick}>Add</button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // const t0 = performance.now();
            addXItems(10000);
            // const t1 = performance.now();
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
