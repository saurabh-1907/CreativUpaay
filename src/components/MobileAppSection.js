import React from 'react';
import { Share, Filter, Calendar, MoreVertical } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <div className="p-6 mb-8"> {/* Added margin-bottom to give distance */}
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Mobile App</h2>
        <div className="flex items-center gap-4">
          <button className="flex items-center bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">Filter</span>
          </button>
          <button className="flex items-center bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200">
            <Calendar className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">Today</span>
          </button>
          <button className="flex items-center bg-violet-100 px-3 py-2 rounded-md hover:bg-violet-200">
            <Share className="h-5 w-5 text-violet-600" />
            <span className="text-sm text-violet-600">Share</span>
          </button>
          <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default MobileAppSection;
