import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTiktok } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Game Description */}
      <h1 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
        About the Game
      </h1>

      {/* Developer Information */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center mb-8">
        {/* Developer Image */}
        <div className="mb-6 md:mb-0 md:mr-6">
          <img className="w-36 h-36 p-2" src="./logo.png" alt="Developer" />
        </div>

        {/* Developer Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">8amt</h2>
          <p className="text-gray-600 mb-4">
            This game is designed to provide a fun and interactive experience for players of all skill levels. Our goal is to create a platform where users can enjoy a challenging and rewarding experience. We value feedback and are continuously working on updates to make this game even better.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/iyehah"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/your-profile"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@your-profile"
              className="text-blue-400 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Free Plan</h2>
          <p className="text-gray-600 mb-4">Basic access to the game with limited features.</p>
          <p className="text-4xl font-bold mb-6 text-blue-500 ">Free</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transition hover:bg-blue-600">
            Choose Plan
          </button>
        </div>

        {/* 300 UMR Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Standard Plan</h2>
          <p className="text-gray-600 mb-4">Unlock additional features and content.</p>
          <p className="text-4xl font-bold mb-6 text-blue-500 line-through">
            300 UMR
          </p>
          <button disabled className="bg-blue-300 text-white py-2 px-4 rounded-lg transition hover:bg-blue-300">
            Choose Plan
          </button>
        </div>

        {/* 500 UMR Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Premium Plan</h2>
          <p className="text-gray-600 mb-4">Access all features and premium content.</p>
          <p className="text-4xl font-bold mb-6 text-blue-500 line-through">
            500 UMR
          </p>
          <button disabled className="bg-blue-300 text-white py-2 px-4 rounded-lg transition hover:bg-blue-300">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
