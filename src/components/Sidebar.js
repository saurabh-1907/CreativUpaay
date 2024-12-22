import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-gray-100 border-r p-4">
      <h2 className="text-lg font-bold mb-4">Project M</h2>
      <ul className="space-y-4">
        <li className="text-blue-500 font-medium">Mobile App</li>
        <li>Website Redesign</li>
        <li>Design System</li>
        <li>Wireframes</li>
      </ul>
      <div className="mt-6 bg-gray-200 p-4 rounded-lg">
        <h3 className="text-sm font-semibold">Thoughts Time</h3>
        <p className="text-xs text-gray-600 mt-2">
          Write down your thoughts or feedback for the team.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
