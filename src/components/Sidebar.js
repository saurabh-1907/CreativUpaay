import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white border-r p-4">
      <h2 className="text-lg font-bold mb-4 text-violet-700">Project M</h2>

      {/* Navigation */}
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-violet-500 font-medium hover:bg-blue-100 p-2 rounded-md">
          <span className="text-violet-500">🏠</span>
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded-md">
          <span className="text-violet-500">📩</span>
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded-md">
          <span className="text-violet-500">✅</span>
          <span>Tasks</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded-md">
          <span className="text-violet-500">👥</span>
          <span>Members</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded-md">
          <span className="text-violet-500">⚙️</span>
          <span>Settings</span>
        </li>
      </ul>

      <hr className="my-6 border-violet-300" />

      {/* Projects */}
      <h3 className="text-sm font-bold mb-4 text-violet-700">My Projects</h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 hover:bg-violet-100 p-2 rounded-md">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "lightgreen" }}
          ></span>
          <span>Mobile App</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-violet-100 p-2 rounded-md">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "orange" }}
          ></span>
          <span>Website Redesign</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-violet-100 p-2 rounded-md">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "violet" }}
          ></span>
          <span>Design System</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-violet-100 p-2 rounded-md">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: "lightblue" }}
          ></span>
          <span>Wireframes</span>
        </li>
      </ul>

      {/* Thoughts Time */}
      <div className="mt-6 bg-violet-100 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-violet-700">Thoughts Time</h3>
        <p className="text-xs text-violet-600 mt-2">
          Write down your thoughts or feedback for the team.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
