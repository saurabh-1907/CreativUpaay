import React from 'react';

const TaskCard = ({ task }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
    <p className="text-sm text-gray-600">{task.description}</p>
    <div className="flex items-center mt-3">
      <div className="flex -space-x-2">
        {task.teamMembers.map((member, index) => (
          <img
            key={index}
            className="w-6 h-6 rounded-full border-2 border-white"
            src={member.img}
            alt={member.name}
          />
        ))}
      </div>
      <span className="ml-3 text-sm text-gray-600">{task.comments} comments</span>
      <span className="ml-3 text-sm text-gray-600">{task.files} files</span>
    </div>
  </div>
);

export default TaskCard;
