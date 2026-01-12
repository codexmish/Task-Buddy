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
    setTasks(newTask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  return (
    <>
      <header className="w-full bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-gray-800 dark:to-indigo-700 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">TaskBuddy</h1>
            <p className="text-sm text-indigo-100/90 dark:text-indigo-200 mt-1">Your friendly task manager</p>
          </div>

          
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTasks={updateTask}
          deleteTasks={deleteTask}
        />
        <ProgressTracker />
      </main>
    </>
  );
};

export default App;
