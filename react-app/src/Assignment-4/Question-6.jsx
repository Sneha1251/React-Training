// Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.

import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState(["Assignment-4"]);
  const [newTask, setNewTask] = useState("");

  const AddTask = () => {
    if (newTask) {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  return (
    <div>
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          placeholder="Add task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={AddTask}>Add</button>
      </div>
      <div className="taskList">
        <ul>
          {task.map((tasks) => (
            <li key={tasks.id}>{tasks}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
