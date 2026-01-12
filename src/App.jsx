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

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask)
  };

  const deleteTask = () => {

  };

  return (
    <>
      <header>
        <h1>TaskBuddy</h1>
        <p>Your friendly task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTasks={updateTask}
        deleteTasks={deleteTask}
      />
      <ProgressTracker />
    </>
  );
};

export default App;
