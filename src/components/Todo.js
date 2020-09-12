import React from "react";
import TodoItem from "./TodoItem.js";
const Todo = (props) => {
  return (
    <>
      <h1>Todo List</h1>
      {props.todo.map((list) => {
        return <TodoItem key={list.id} list={list} />;
      })}
    </>
  );
};

export default Todo;
