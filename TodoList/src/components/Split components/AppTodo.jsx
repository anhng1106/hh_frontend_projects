import React, { useState } from "react";
import TodoTable from "./TodoTable";

function AppTodo() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todo.description && todo.date) {
      setTodos([...todos, todo]);
      setTodo({ description: "", date: "" });
    } else {
      alert("Type a description and date first");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <React.Fragment>
      <fieldset>
        <legend>Add todo:</legend>
        <br />
        <p className="text">
          Description:{" "}
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          Date:{" "}
          <input
            type="date"
            value={todo.date}
            onChange={(e) => setTodo({ ...todo, date: e.target.value })}
          />
          <button onClick={handleClick}>Add Todo</button>{" "}
          <button onClick={deleteAll}> Delete all </button>
        </p>
      </fieldset>
      <TodoTable todos={todos} handleDelete={handleDelete} />
    </React.Fragment>
  );
}

export default AppTodo;
