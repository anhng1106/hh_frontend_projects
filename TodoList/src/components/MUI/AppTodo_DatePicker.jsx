import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react"; //AG Grid component
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid

function AppTodo() {
  const [todo, setTodo] = useState({
    description: "",
    priority: "",
    date: dayjs(),
  });

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

  const gridRef = useRef();

  const handleClick = () => {
    if (todo.description && todo.date && todo.priority) {
      const formattedDate = dayjs(todo.date).format("DD-MM-YYYY");
      const newTodo = { ...todo, date: formattedDate };
      setTodos([...todos, newTodo]);
      setTodo({ description: "", priority: "", date: "" });
    } else {
      alert("Type a description and date first");
    }
  };

  const handleDelete = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (todo, index) => index != gridRef.current.getSelectedNodes()[0].id
        )
      );
    } else {
      alert("Select a row first!");
    }
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <React.Fragment>
      <fieldset>
        <legend>Add todo:</legend>
        <br />
        <Stack
          direction="row"
          spacing={2}
          mt={2}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            variant="outlined"
            id="description"
            label="Description"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          <TextField
            variant="outlined"
            id="priority"
            label="Priority"
            value={todo.priority}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Date"
                value={todo.date}
                onChange={(newDate) => setTodo({ ...todo, date: newDate })}
                renderInput={(params) => <TextField {...params} />}
                format="DD-MM-YYYY"
              />
            </DemoContainer>
          </LocalizationProvider>
          <Button variant="outlined" onClick={handleClick}>
            Add Todo
          </Button>{" "}
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Delete
          </Button>{" "}
          <Button variant="outlined" color="error" onClick={deleteAll}>
            {" "}
            Delete all{" "}
          </Button>
        </Stack>
      </fieldset>
      <div className="ag-theme-material" style={{ width: 700, height: 650 }}>
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowData={todos}
          columnDefs={colDefs}
          rowSelection="single"
        />
      </div>
    </React.Fragment>
  );
}

export default AppTodo;
