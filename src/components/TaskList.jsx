import React from "react";

const TaskList = ({ tasks, updateTasks, deleteTasks }) => {
  const toggleComplete = (index) => {
    const updatedtask = { ...tasks[index], completed: !tasks[index].completed };
    updateTasks(updatedtask, index);
  };

  const difficultyBadge = (diff) => {
    const d = diff?.trim?.() || "";
    if (d === "Beginner") return "bg-green-100 text-green-800";
    if (d === "Intermediate") return "bg-yellow-100 text-yellow-800";
    if (d === "Advanced") return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <ul className="w-full max-w-3xl mx-auto space-y-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between gap-4 p-3 bg-white/90 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition"
          aria-label={`task-${index}`}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button
              onClick={() => toggleComplete(index)}
              aria-pressed={task.completed}
              className={`flex-none w-9 h-9 rounded-full flex items-center justify-center border ${
                task.completed
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white dark:bg-gray-900 text-indigo-600 border-gray-200 dark:border-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            >
              {task.completed ? (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div className={`text-sm font-medium truncate ${task.completed ? "line-through text-gray-400" : "text-gray-900 dark:text-gray-100"}`}>
                {task.text}
              </div>
              <div className="mt-1 flex items-center gap-2">
                <small className={`px-2 py-0.5 text-xs rounded-full ${difficultyBadge(task.diff)}`}>
                  {task.diff?.trim?.() || task.diff}
                </small>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-none">
            <button
              onClick={() => toggleComplete(index)}
              className="px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {task.completed ? "Undo" : "Completed"}
            </button>

            <button
              onClick={() => deleteTasks(index)}
              className="px-3 py-1.5 text-sm rounded-md bg-red-50 text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
