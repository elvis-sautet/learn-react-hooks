import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "reactHooks";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const toogleTodos = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };
  //get from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  //set to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <input ref={todoNameRef} />{" "}
        <button style={{ marginRight: "2px" }} onClick={handleAddTodo}>
          Add Todo
        </button>{" "}
        <button style={{ color: "red" }} onClick={handleClearTodos}>
          Clear completed todo
        </button>
      </div>
      <TodoList todos={todos} toogleTodos={toogleTodos} />
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
