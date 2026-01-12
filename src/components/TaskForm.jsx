import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  //   console.log(difficulty);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      text: task,
      diff: difficulty,
      completed: false,
    });

    // reset State
    setTask("");
    setDifficulty("Beginner");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white/90 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-4"
      aria-label="Add task form"
    >
      <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-3">
        <label htmlFor="task" className="sr-only">
          Task
        </label>
        <div className="flex items-center gap-2 flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2">
          <svg
            className="w-5 h-5 text-indigo-500 flex-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 8h10M7 12h.01M7 16h.01" />
          </svg>
          <input
            id="task"
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="sm:w-48 w-full">
          <label htmlFor="difficulty" className="sr-only">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            id="difficulty"
            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate ">Intermediate</option>
            <option value="Advanced ">Advanced</option>
          </select>
        </div>
      </div>

      <div className="flex-none sm:ml-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Task</span>
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
