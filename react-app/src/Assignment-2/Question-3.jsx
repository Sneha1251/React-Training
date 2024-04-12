// Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([{}]);

  const addTodo = () => {
    setTodos([...todos, { text: "", completed: false }]);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const textChange = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <>
      <h2>ToDo List</h2>
      <div className="add-task">
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="checkbox">
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => textChange(index, e.target.value)}
                />
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(index)}
                />
                <button onClick={() => removeTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
