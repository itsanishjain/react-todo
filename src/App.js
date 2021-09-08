// https://github.com/divanov11/notes-app
import React, { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy mac book" },
    { id: 2, content: "made some code to work" },
  ]);

  const deleteTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTask = (newTodo) => {
    console.log("New", newTodo);
    newTodo.id = Math.random();
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo-app container">
        <h2 className="center orange-text">Todo's</h2>
        <Todos todos={todos} deleteTodo={deleteTodo} />
        <Form addTask={addTask} />
      </div>
    </div>
  );
};

export default App;


