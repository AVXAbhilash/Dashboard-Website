import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "What is Abhilash’s Dashboard about?", a: "It’s a modern multi-page admin dashboard built using React and Tailwind CSS." },
    { q: "Who developed this dashboard?", a: "Designed and developed by Abhilash Mohanta, a passionate B.Tech CSE student." },
    { q: "Is the dashboard mobile responsive?", a: "Yes, fully responsive for desktops, tablets, and mobile devices." },
    { q: "Can I integrate this with a backend?", a: "Absolutely! You can connect it via API calls to Node.js, Python, or PHP backends." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-8 text-center dark:text-accent">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-[#e9f3f3] dark:text-black rounded-lg shadow-sm overflow-hidden border-l-4 transition-all duration-300 ${activeIndex === index ? 'border-blue-600 shadow-md' : 'border-transparent'}`}
          >
            <div 
              className="flex justify-between items-center p-5 cursor-pointer font-semibold text-primary"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.q}</span>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45 text-blue-600' : 'text-blue-400'}`}>
                <FaPlus />
              </span>
            </div>
            <div className={`px-5 text-gray-600 transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;