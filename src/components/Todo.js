import React from "react";
import TodoItem from "./TodoItem.js";
import PropTypes from "prop-types";
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
// Validating Proptype
Todo.protoTypes = {
  todo: PropTypes.array.isRequired,
};
export default Todo;
