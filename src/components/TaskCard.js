import React from 'react';

const TaskCard = ({ task }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
    <h4 className="font-semibold">{task.title}</h4>
    <p className="text-sm text-gray-600">{task.description}</p>
    <div className="text-xs text-gray-500 mt-2">
      Difficulty: {task.difficulty}
    </div>
  </div>
);

export default TaskCard;
