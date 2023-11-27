import React, { useState } from "react";
import classes from "./Todos.module.css";

const todos = [
  { id: "t1", title: "Meeting", isCompleted: false },
  { id: "t2", title: "Exercise", isCompleted: false },
];

const Todos = () => {
  const [tasks, setTasks] = useState(todos);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const markTaskAsDone = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.isCompleted);


  const todoLists = incompleteTasks.map((todo) => (
    <div key={todo.id} className={classes.container}>
      <div className={classes.title}>
        <h4>{todo.title}</h4>
      </div>
      <div className={classes.actions}>
        <button className={classes.delete} onClick={() => deleteTask(todo.id)}>
          Delete
        </button>
        <button className={classes.done} onClick={() => markTaskAsDone(todo.id)}>Mark as Done</button>
      </div>
    </div>
  ));

  return <div>{todoLists}</div>;
};

export default Todos;