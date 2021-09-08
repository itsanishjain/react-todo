import React, { useState } from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
      </div>
    ))
  ) : (
    <p className="center">You have no todos left</p>
  );

  return <div className="todo collection">{todosList}</div>;
};

export default Todos;
