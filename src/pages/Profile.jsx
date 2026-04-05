import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white dark:bg-[#e9f3f3] dark:text-black rounded-xl shadow-lg p-8 max-w-2xl w-full text-center transition-transform hover:-translate-y-2">
        <img 
          src="https://pbs.twimg.com/profile_images/1963168734190911488/4EVEopNj_400x400.jpg" 
          alt="Abhilash"
          className="w-32 h-32 rounded-full border-4 border-primary mx-auto mb-4 object-cover hover:scale-105 transition-transform"
        />
        <h2 className="text-2xl font-bold text-primary">Abhilash Mohanta</h2>
        <p className="text-gray-600 dark:text-gray-800">Software Developer | Music Producer</p>
        <p className="text-gray-500 text-sm mt-1">📍 Rairangpur, India</p>

        <div className="flex justify-center gap-6 mt-6 bg-indigo-50 dark:bg-blue-100 py-3 rounded-lg">
          <SocialLink href="https://abhilash-portfolio-website.onrender.com/" icon={<FaGlobe />} />
          <SocialLink href="https://x.com/AVXAbhilash" icon={<FaTwitter />} />
          <SocialLink href="https://github.com/AVXAbhilash" icon={<FaGithub />} />
          <SocialLink href="https://linkedin.com/in/abhilash-mohanta-b398a1325" icon={<FaLinkedin />} />
        </div>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            Passionate software developer with a knack for creating efficient and scalable applications. 
            In my free time, I enjoy producing music and exploring new technologies.
          </p>

          <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4 mt-8">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Tailwind'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-blue-600 transition-colors">
    {icon}
  </a>
);

export default Profile;