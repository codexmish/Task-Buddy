import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";

const App = () => {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <header>
        <h1>TaskBuddy</h1>
        <p>Your friendly task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList />
      <ProgressTracker />
    </>
  );
};

export default App;
