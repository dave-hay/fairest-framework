import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalItems, setTotalItems] = useState("");

  const checkItem = (cur) => {
    const newTodos = todos.map((t) => {
      if (t === cur) {
        t.status = !t.status;
      }
      return t;
    });
    setTodos(newTodos);
  };

  const removeFromList = (td) => {
    const newTodos = todos.filter((t) => t !== td);
    setTodos(newTodos);
  };

  const addXItems = (num) => {
    const t0 = performance.now();
    const newItems = [];
    for (let i = 0; i < num; i++) {
      newItems.push({ text: newTodo, status: false });
    }
    setTodos([...todos, ...newItems]);
    const t1 = performance.now();
    const time = t1 - t0;
    // Getting DATA
    // const toWrite = `${num}: ${time} ms`;
    // console.log(toWrite);
    const totalTime =
      time < 1000 ? time.toFixed(3) + " ms" : (time / 1000).toFixed(2) + " s";
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
        <button className={"button"} onClick={() => addXItems(1)}>
          Add 1
        </button>
        <button className={"button"} onClick={() => addXItems(1000)}>
          Add 1K
        </button>
        <button className={"button"} onClick={() => addXItems(5000)}>
          Add 5K
        </button>
        <button className={"button"} onClick={() => addXItems(10000)}>
          Add 10K
        </button>
        <button className={"button"} onClick={() => addXItems(50000)}>
          Add 50K
        </button>
        <button className={"button"} onClick={() => addXItems(100000)}>
          Add 100K
        </button>
      </div>
      <div>
        <ul className={"todos"}>
          {todos.map((todo) => {
            return (
              <li className={"todo"}>
                <input type="checkbox" onClick={() => checkItem(todo)} />
                <span
                  style={{
                    textDecoration: todo.status ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => removeFromList(todo)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
