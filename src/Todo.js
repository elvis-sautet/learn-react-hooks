import React from "react";

export default function Todo({ todo, toogleTodos }) {
  function handleTodoClick() {
    toogleTodos(todo.id);
  }
  return (
    <div style={{ display: "flex", marginBottom: "0" }}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      />{" "}
      <span>{todo.name}</span>
    </div>
  );
}
