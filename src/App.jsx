import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


// Lazy Load Pages for Performance Optimization
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Tables = lazy(() => import('./pages/Tables'));
const Forms = lazy(() => import('./pages/Forms'));
const Charts = lazy(() => import('./pages/Charts'));
const Components = lazy(() => import('./pages/Components'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-[#eaf6fd] dark:bg-[#121212]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#eaf6fd] dark:bg-[#121212] font-sans text-gray-900 dark:text-gray-100">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="flex-1 flex flex-col w-full lg:w-[calc(100%-256px)] transition-all duration-300">
          <Header 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} 
          />
          
          <main className="flex-1 mt-[70px] p-6 overflow-x-hidden">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/charts" element={<Charts />} /> 
                <Route path="/components" element={<Components />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </Suspense> 
          </main>

          <footer className="py-6 text-center text-sm text-[#012970]/60 dark:text-gray-400">
            © 2025 Developed by Abhilash.
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;