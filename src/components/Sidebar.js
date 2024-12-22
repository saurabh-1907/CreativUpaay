import React from 'react';
import { FaHome, FaEnvelope, FaTasks, FaUsers, FaCog } from 'react-icons/fa'; // Import icons

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-gray-100 border-r p-4">
      <h2 className="text-lg font-bold mb-4">Project M</h2>

      {/* Navigation */}
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-blue-500 font-medium">
          <FaHome />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaEnvelope />
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaTasks />
          <span>Tasks</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers />
          <span>Members</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>

      <hr className="my-6" />

      {/* Projects */}
      <h3 className="text-sm font-bold mb-4">My Projects</h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-blue-500 font-medium">
          <FaTasks />
          <span>Mobile App</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaTasks />
          <span>Website Redesign</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaTasks />
          <span>Design System</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaTasks />
          <span>Wireframes</span>
        </li>
      </ul>

      {/* Thoughts Time */}
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
