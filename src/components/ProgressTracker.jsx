import React from "react";

const ProgressTracker = ({ tasks = [] }) => {
  const completedtask = tasks.filter((t) => t.completed).length;
  const totalTask = tasks.length;
  const parcentage = totalTask == 0 ? 0 : (completedtask / totalTask) * 100;
  const pct = Math.round(parcentage);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white/90 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              <span className="font-semibold text-gray-900 dark:text-white">
                {completedtask}
              </span>
              <span className="text-gray-600 dark:text-gray-300"> Out of </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {totalTask}
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {" "}
                tasks completed
              </span>
            </p>
          </div>

          <div className="flex-1 px-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-indigo-600"
                style={{ width: `${pct}%` }}
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Tasks completion"
              />
            </div>
          </div>

          <div className="flex-none">
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {pct}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
