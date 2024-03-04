import React from "react";

function TodoTable({ todos, handleDelete }) {
  return (
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
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
