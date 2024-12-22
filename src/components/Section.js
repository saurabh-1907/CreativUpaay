import React from 'react';
import TaskCard from './TaskCard';

const Section = ({ title, tasks, onAddTask }) => (
  <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={onAddTask}
      >
        +
      </button>
    </div>
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  </div>
);

export default Section;
