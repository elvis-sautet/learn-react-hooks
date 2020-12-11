import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toogleTodos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} toogleTodos={toogleTodos} />;
  });
}
