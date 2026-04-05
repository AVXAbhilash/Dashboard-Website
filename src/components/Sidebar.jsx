import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartBar, FaPuzzlePiece, FaWpforms, FaTable, FaChartLine, FaUser, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { type: 'header', label: 'Overview' },
    { path: '/', label: 'Dashboard', icon: <FaChartBar /> },
    { type: 'header', label: 'Tools' },
    { path: '/components', label: 'Components', icon: <FaPuzzlePiece /> },
    { path: '/forms', label: 'Forms', icon: <FaWpforms /> },
    { path: '/tables', label: 'Tables', icon: <FaTable /> },
    { path: '/charts', label: 'Charts', icon: <FaChartLine /> },
    { type: 'header', label: 'Support' },
    { path: '/profile', label: 'Profile', icon: <FaUser /> },
    { path: '/faq', label: 'F.A.Q', icon: <FaQuestionCircle /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />

      <aside className={`fixed lg:static top-0 left-0 h-screen w-64 bg-white dark:bg-[#1f1f1f] shadow-2xl lg:shadow-none z-40 transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 border-r border-gray-100 dark:border-gray-800`}>
        
        {/* Sidebar Header */}
        <div className="h-[70px] flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            Admin.
          </span>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-70px)]">
          {menuItems.map((item, index) => (
            item.type === 'header' ? (
              <div key={index} className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                {item.label}
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${location.pathname === item.path 
                    ? 'nav-item-active shadow-md' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600'}`}
              >
                <span className={`text-lg transition-colors ${location.pathname === item.path ? 'text-blue-600 dark:text-blue-300' : 'text-gray-400 group-hover:text-blue-500'}`}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          ))}
        </nav>
      </aside>
    </>
  );
};

export default memo(Sidebar);