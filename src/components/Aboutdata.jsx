import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";  

function Aboutdata() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          About This Project
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      {/* About Developer Section */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8 hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-blue-500 mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            About Developer
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
          Hello there! I'm Ali Zarshenas, the passionate developer behind this website. 
          With a keen eye for detail and a love for crafting seamless digital experiences, 
          I set out to create a unique and user-friendly online shopping platform.
        </p>
      </div>

      {/* Frameworks and Technologies Section */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8 hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-blue-500 mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            Frameworks and Technologies Used
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
          In the development of this website, I've harnessed the power of the following 
          frameworks and technologies to create a modern, single-page application (SPA):
        </p>
        <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
          <div className="flex flex-col items-center group">
            <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition">
              <FaReact className="text-5xl sm:text-6xl text-blue-500" />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700">React</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="bg-cyan-50 p-4 rounded-full group-hover:bg-cyan-100 transition">
              <RiTailwindCssFill className="text-5xl sm:text-6xl text-cyan-500" />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8 hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-blue-500 mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            A Glimpse into the Backend
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
          While my expertise primarily lies in frontend development, I've integrated Node.js 
          and Express.js on the backend to ensure a robust and efficient server-side infrastructure. 
          This combination allows for smooth communication between the frontend and the server, 
          ensuring a seamless user experience.
        </p>
        <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
          <div className="flex flex-col items-center group">
            <div className="bg-green-50 p-4 rounded-full group-hover:bg-green-100 transition">
              <FaNode className="text-5xl sm:text-6xl text-green-600" />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700">Node.js</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="bg-gray-50 p-4 rounded-full group-hover:bg-gray-100 transition">
              <SiExpress className="text-5xl sm:text-6xl text-gray-700" />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700">Express.js</span>
          </div>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 sm:p-8 text-white">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-white mr-4"></div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Let's Connect
          </h2>
        </div>
        <p className="leading-relaxed mb-6 text-base sm:text-lg">
          Explore the website, discover the offerings, and if you have any questions or suggestions, 
          I'm here to listen. Your journey through this online shopping experience is as important 
          to me as it is to you. Happy exploring!
        </p>
        <div className="flex gap-4 items-center">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-100 transition group"
          >
            <FaLinkedinIn className="text-2xl sm:text-3xl text-blue-600 group-hover:scale-110 transition" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full hover:bg-gray-100 transition group"
          >
            <FaGithub className="text-2xl sm:text-3xl text-gray-800 group-hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutdata;