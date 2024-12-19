import React from 'react';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">AutoBumper</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaDiscord className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          © {new Date().getFullYear()} AutoBumper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}