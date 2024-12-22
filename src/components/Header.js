import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-sm h-16 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center rounded-full bg-gray-100 px-4 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-3 w-64 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-md bg-gray-100 hover:bg-gray-200">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              3
            </span>
          </button>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <span className="hidden text-sm font-medium text-gray-700 sm:block">John Doe</span>
          </div>
          <button className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;