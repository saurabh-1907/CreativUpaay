import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white  z-10">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        {/* Project M */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
            
            <h1 className="ml-3 text-lg font-bold text-gray-700">Project M</h1>
          </div>
        </div>
        {/* Search Input */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="ml-3 w-full bg-transparent text-sm focus:outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Icons and User Profile */}
        <div className="flex items-center gap-6">
          <button className="relative p-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
              3
            </span>
          </button>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Saurabh Pandey</span>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
