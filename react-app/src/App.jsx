import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [inp, setInp] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const newTodo = { name: inp };
    setTodos([...todos, newTodo]);
    setInp("");
  };

  const addXItems = (num) => {
    setLoading(true);
    const t0 = performance.now();
    // for (let i = 0; i < num; i++) {
    //   newItems.push({ name: inp });
    //   // setTotalItems(totalItems + 1);
    // }
    const newI = Array(num).fill({ name: inp });
    setTodos(...todos, newI);
    const t1 = performance.now();
    const time = (t1 - t0) / 10000;
    setLoading(false);
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
            addXItems(1000);
          }}
        >
          Add 10K
        </button>
      </div>
      <div>
        <ul>
          {!loading && todos.map((todo) => <Todo props={todo} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
