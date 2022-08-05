import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [inp, setInp] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const newTodo = { name: inp };
    setTodos([...todos, newTodo]);
    setInp("");
  };

  return (
    <div>
      <div>
        <h1>My Todos</h1>
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button type="button" onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => <Todo props={todo} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
