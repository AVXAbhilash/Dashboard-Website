import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Page Title */}
      <div>
         <h1 className="text-3xl font-bold text-[#012970] dark:text-white tracking-tight">Contact Us</h1>
         <p className="text-gray-500 dark:text-gray-400 mt-2">Have a question? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Contact Info Card */}
        <div className="glass rounded-2xl p-8 bg-blue-600 text-white flex flex-col justify-between space-y-8 lg:col-span-1">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <p className="text-blue-100 leading-relaxed">
              Whether you have a question about features, pricing, or just want to say hi, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Address</p>
                <p className="font-medium">Rairangpur, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Email</p>
                <p className="font-medium">abhilash@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-200">Phone</p>
                <p className="font-medium">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass rounded-2xl p-8 lg:col-span-2 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="Abhilash Mohanta"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-40 dark:text-white"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;