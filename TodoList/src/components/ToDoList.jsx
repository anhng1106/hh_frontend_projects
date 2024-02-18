import React from "react";

function ToDoList() {
  const [todo, setTodo] = React.useState({
    description: "",
    date: "",
  });
  //insteade of write React.useState, we can directly
  //import from the beginning: import { useState } from "react"
  const [todos, setTodos] = React.useState([]);
  const handleClick = () => {
    if (todo.description && todo.date) {
      setTodos([...todos, todo]);
      setTodo({ description: "", date: "" });
    } else {
      alert("Type a description and date first");
    }
  };
  console.log(todos);
  return (
    <React.Fragment>
      <fieldset>
        <legend>Add todo:</legend>
        <br></br>
        <p class="text">
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
        </p>
      </fieldset>

      <table>
        <tbody>
          <tr>
            <td class="title">Date</td>
            <td class="title">Description</td>
          </tr>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ToDoList;
