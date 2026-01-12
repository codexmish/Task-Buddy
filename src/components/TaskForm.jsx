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
      className="w-full max-w-2xl mx-auto bg-white/80 dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center gap-3"
    >
      <div className="flex-1 flex gap-3 items-center">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="sm:w-48 w-40">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            id="difficulty"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate ">Intermediate</option>
            <option value="Advanced ">Advanced</option>
          </select>
        </div>
      </div>

      <div className="sm:ml-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
