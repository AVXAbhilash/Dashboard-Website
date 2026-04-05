import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaBell, FaComment, FaMoon, FaSun, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar, darkMode, toggleDarkMode }) => {
  const [activeMenu, setActiveMenu] = useState(null); // 'notifications', 'messages', or null
  const menuRef = useRef(null);

  // Demo Data from your original script
  const notifications = [
    { title: "New sale", desc: "Order #1245 completed", color: "bg-blue-50 text-blue-600" },
    { title: "Server uptime", desc: "99.9% this week", color: "bg-green-50 text-green-600" },
    { title: "System update", desc: "Update available", color: "bg-orange-50 text-orange-600" },
    { title: "New user", desc: "Registered: Emily", color: "bg-purple-50 text-purple-600" },
  ];

  const messages = [
    { sender: "John", text: "Hey, are you available?", time: "2 min ago" },
    { sender: "Priya", text: "Please review the new design.", time: "15 min ago" },
    { sender: "System", text: "Backup completed successfully.", time: "1 hr ago" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-256px)] h-[70px] z-50 px-6 flex items-center justify-between transition-all duration-300 glass border-b border-white/30 dark:border-gray-700" ref={menuRef}>
      
      {/* Mobile Toggle & Search */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="lg:hidden text-2xl text-[#012970] dark:text-white">
          <FaBars />
        </button>
        <div className="hidden md:flex items-center bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-blue-100 dark:border-gray-700 w-64">
          <FaSearch className="text-gray-400 mr-2" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-full dark:text-white" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-5 relative">
        
        {/* Notifications Icon */}
        <div className="relative">
          <IconButton 
            icon={<FaBell />} 
            badge={4} 
            color="bg-blue-600" 
            onClick={() => toggleMenu('notifications')} 
          />
          
          {/* Notifications Dropdown */}
          {activeMenu === 'notifications' && (
            <div className="absolute right-0 top-12 w-80 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in z-50">
              <div className="px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-bold text-[#012970] dark:text-white">Notifications</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">4 New</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((note, idx) => (
                  <div key={idx} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer flex gap-3 items-start border-b dark:border-gray-800 last:border-0">
                     <div className={`w-2 h-2 mt-2 rounded-full ${note.color.split(' ')[1].replace('text', 'bg')}`}></div>
                     <div>
                       <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{note.title}</p>
                       <p className="text-xs text-gray-500">{note.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
              <div className="p-2 text-center border-t dark:border-gray-700">
                <button className="text-xs text-blue-600 font-semibold hover:underline">View all</button>
              </div>
            </div>
          )}
        </div>

        {/* Messages Icon */}
        <div className="relative">
          <IconButton 
            icon={<FaComment />} 
            badge={3} 
            color="bg-green-500" 
            onClick={() => toggleMenu('messages')} 
          />
           
           {/* Messages Dropdown */}
           {activeMenu === 'messages' && (
            <div className="absolute right-0 top-12 w-80 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in z-50">
              <div className="px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-bold text-[#012970] dark:text-white">Messages</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">3 New</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div key={idx} className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer flex gap-3 border-b dark:border-gray-800 last:border-0">
                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                       {msg.sender[0]}
                     </div>
                     <div className="flex-1">
                       <div className="flex justify-between">
                         <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{msg.sender}</p>
                         <p className="text-[10px] text-gray-400">{msg.time}</p>
                       </div>
                       <p className="text-xs text-gray-500 mt-1 line-clamp-1">"{msg.text}"</p>
                     </div>
                  </div>
                ))}
              </div>
              <div className="p-2 text-center border-t dark:border-gray-700">
                <button className="text-xs text-blue-600 font-semibold hover:underline">View all</button>
              </div>
            </div>
          )}
        </div>
        
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-[#012970] dark:text-yellow-400 text-xl hover:scale-110 transition-transform">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Profile Link */}
        <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden hover:ring-2 ring-blue-300 transition-all">
          <img src="https://pbs.twimg.com/profile_images/1963168734190911488/4EVEopNj_400x400.jpg" alt="Profile" className="w-full h-full object-cover" />
        </Link>
      </div>
    </header>
  );
};

// Reusable Icon Button
const IconButton = ({ icon, badge, color, onClick }) => (
  <button onClick={onClick} className="relative text-[#012970] dark:text-gray-200 text-xl hover:scale-110 transition-transform">
    {icon}
    <span className={`absolute -top-1 -right-1 ${color} text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white dark:ring-[#121212]`}>
      {badge}
    </span>
  </button>
);

export default Header;