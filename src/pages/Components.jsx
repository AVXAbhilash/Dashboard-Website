import React, { use } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Components = () => {
  const navigate = useNavigate(); // Assuming useNavigate is imported from react-router-dom
  return (
    <div className="p-6">
      <div className="mb-6 text-gray-500 text-sm">Home / Components</div>
      <h1 className="text-2xl font-bold text-primary mb-6 dark:text-accent">UI Components</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* --- Buttons Section --- */}
        <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-primary mb-4 border-b pb-2">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
              Primary
            </button>
            <button className="bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium py-2 px-6 rounded transition-colors duration-300">
              Outline
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
              Success
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
              Danger
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded transition-colors duration-300">
              Secondary
            </button>
          </div>
        </div>

        {/* --- Badges Section --- */}
        <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-primary mb-4 border-b pb-2">Badges</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Primary</span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">Success</span>
            <span className="bg-red-100 text-red-800 text-base font-medium px-3 py-1 rounded">Danger</span>
            <span className="bg-yellow-100 text-yellow-800 text-lg font-semibold px-4 py-1 rounded">Warning</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Round</span>
          </div>
        </div>

        {/* --- Alerts Section --- */}
        <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-lg shadow-md p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-primary mb-4 border-b pb-2">Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-center bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded" role="alert">
              <FaInfoCircle className="mr-3 text-xl" />
              <div>
                <p className="font-bold">Info</p>
                <p>Something updated successfully.</p>
              </div>
            </div>

            <div className="flex items-center bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded" role="alert">
              <FaCheckCircle className="mr-3 text-xl" />
              <div>
                <p className="font-bold">Success</p>
                <p>Your changes have been saved.</p>
              </div>
            </div>

            <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded" role="alert">
              <FaExclamationTriangle className="mr-3 text-xl" />
              <div>
                <p className="font-bold">Warning</p>
                <p>Your account subscription is expiring soon.</p>
              </div>
            </div>

            <div className="flex items-center bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
              <FaTimesCircle className="mr-3 text-xl" />
              <div>
                <p className="font-bold">Error</p>
                <p>Something went wrong. Please try again.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Cards Section --- */}
        <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Card with Header</h3>
          <h5 className="text-gray-500 text-sm mb-4">Standard card layout</h5>
          <p className="text-gray-700">
            This is a standard card component. You can use it to group related content,
            display charts, or show user details. It automatically adapts to dark mode.
          </p>
        </div>

        <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-lg shadow-md overflow-hidden">
           <div className="bg-primary text-white p-4 font-semibold">
             Featured Card   
           </div>
           <div className="p-6">
             <h5 className="font-bold text-lg mb-2">Special Title Treatment</h5>
             <p className="text-gray-700 mb-4">
               With supporting text below as a natural lead-in to additional content.
             </p>
             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={()=>navigate('/')}>Go somewhere</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Components;