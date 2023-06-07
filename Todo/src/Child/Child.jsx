import React from "react";

export const Child = (props) => {
  const { todo, handleCheckChange } = props;

  return (
    <li>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.isDone}
        onChange={() => handleCheckChange(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
    </li>
  );
};