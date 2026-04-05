import React from 'react';

const Forms = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-6 dark:text-accent">Forms</h1>
      <div className="bg-white dark:bg-[#e9f3f3] max-w-lg rounded-lg shadow-md p-6">
        <div className="mb-4 text-lg font-semibold text-primary">Contact Form</div>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forms;