import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        {/* Logo and project name */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-violet-300 rounded-full mr-2" />
            <h1 className="text-lg font-bold text-gray-700">Project M</h1>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-2 w-full max-w-xl">
          <div className="flex items-center bg-violet-100 px-4 py-2 rounded-lg w-full">
            <Search className="h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="ml-3 w-full bg-transparent text-sm focus:outline-none placeholder-violet-400"
            />
          </div>
        </div>

        {/* Notification, user info, and menu buttons */}
        <div className="flex items-center gap-6">
          {/* Notification bell with unread count */}
          <button className="relative p-2 bg-violet-100 rounded-md hover:bg-violet-200">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* User profile with name and avatar */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-violet-300 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Saurabh Pandey</span>
          </div>

          {/* Menu button for additional actions */}
          <button className="bg-violet-600 text-white p-2 rounded-md hover:bg-violet-700">
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
