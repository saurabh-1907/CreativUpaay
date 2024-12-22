import React from 'react';
import TaskCard from './TaskCard';

const Section = ({ title, tasks, onAddTask }) => {
  const getDotColor = (title) => {
    switch (title.toLowerCase()) {
      case 'to do':
        return 'bg-blue-500';
      case 'in progress':
        return 'bg-yellow-500';
      case 'done':
        return 'bg-green-500';
      default:
        return '';
    }
  };

  const getLineColor = (title) => {
    switch (title.toLowerCase()) {
      case 'to do':
        return 'border-l-4 border-blue-100';
      case 'in progress':
        return 'border-l-4 border-yellow-100';
      case 'done':
        return 'border-l-4 border-green-100';
      default:
        return '';
    }
  };

  return (
    <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${getDotColor(title)}`}></span>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        {title.toLowerCase() === 'to do' && (
          <button
            className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md"
            onClick={onAddTask}
          >
            +
          </button>
        )}
      </div>
      <div className={`${getLineColor(title)} mb-4`}></div>

      <div className="space-y-4">
        <TaskCard
          task={{
            title: 'Brainstorming',
            description:
              "Brainstorming brings team members' diverse experience into play.",
            difficulty: 'Medium',
            comments: 12,
            files: 0,
            teamMembers: [
              { name: 'Team Member 1', img: 'https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg' },
              { name: 'Team Member 2', img: 'https://media.gettyimages.com/id/2159846964/photo/bridgetown-barbados-rohit-sharma-of-india-celebrates-after-the-final-ball-of-the-icc-mens-t20.jpg?s=612x612&w=gi&k=20&c=CTq4i-JAdni9CQvhvGfGIoehqR_f9StmBvzX8jp922U=' },
              { name: 'Team Member 3', img: 'https://pbs.twimg.com/media/GRU807-WgAA9hQ3?format=jpg&name=large' },
            ],
          }}
        />
        <TaskCard
          task={{
            title: 'Research',
            description: 'User research helps you create an optimal product for users.',
            difficulty: 'Hard',
            comments: 10,
            files: 3,
            teamMembers: [
              { name: 'Team Member 1', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFUx-9c2FS0Flj2pcoApdrBnNW17cXl51Fw&s' },
              { name: 'Team Member 2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTnZgfdLRIkeF7bFAoz0oVQy3M-xB7HcnUQ&s' },
            ],
          }}
        />
        <TaskCard
          task={{
            title: 'Wireframing',
            description:
              'Low fidelity wireframes include the most basic content and visuals.',
            difficulty: 'Easy',
            comments: 9,
            files: 2,
            teamMembers: [
              { name: 'Team Member 1', img: 'https://blog.stocksnap.io/content/images/2022/02/smiling-woman_W6GFOSFAXA.jpg' },
            ],
          }}
        />

        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Section;
