import React from 'react';

const Tables = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-6 dark:text-accent">Tables</h1>
      <div className="bg-white dark:bg-[#e9f3f3] rounded-lg shadow-md p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold text-primary mb-4">User Data</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-3 rounded-tl-lg">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3 rounded-tr-lg">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              { name: 'Abhilash', email: 'abhilash@gmail.com', role: 'Admin' },
              { name: 'Riya', email: 'riya@example.com', role: 'User' },
              { name: 'Amit', email: 'amit@example.com', role: 'Moderator' },
            ].map((user, idx) => (
              <tr key={idx} className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;