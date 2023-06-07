import React, { useState, useEffect } from "react";
import {Child} from "../Child/Child";

export const Parent = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const handleCheckChange = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const handleAddTask = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: task,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <Child
            key={todo.id}
            todo={todo}
            handleCheckChange={handleCheckChange}
          />
        ))}
      </ul>
    </div>
  );
};


