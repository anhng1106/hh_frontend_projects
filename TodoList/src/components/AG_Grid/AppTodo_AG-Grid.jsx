import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; //AG Grid component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid

function AppTodo() {
  const [todo, setTodo] = useState({ description: "", priority: "", date: "" });

  const [todos, setTodos] = useState([]);

  const [colDefs, setColDefs] = useState([
    { field: "description", filter: true },
    {
      field: "priority",
      filter: true,
      cellStyle: (params) =>
        params.value === "high" ? { color: "red" } : { color: "black" },
    },
    { field: "date", filter: false },
  ]);

  const handleClick = () => {
    if (todo.description && todo.date && todo.priority) {
      setTodos([...todos, todo]);
      setTodo({ description: "", priority: "", date: "" });
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
          Priority:{" "}
          <input
            type="text"
            id="priority"
            placeholder="Priority"
            value={todo.priority}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
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
      <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
        <AgGridReact rowData={todos} columnDefs={colDefs} />
      </div>
      {/* <TodoTable todos={todos} handleDelete={handleDelete} /> */}
    </React.Fragment>
  );
}

export default AppTodo;
