import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaDiscord } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <div className="flex items-center justify-center mb-8">
          <FaRobot className="text-6xl mr-4 text-blue-400" />
          <h1 className="text-6xl font-bold gradient-text">AutoBumper</h1>
        </div>
        
        <p className="text-2xl mb-12 text-gray-300">
          Automate your server bumps and watch your community grow
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-lg"
        >
          <div className="flex items-center justify-center">
            <FaDiscord className="mr-2 text-xl" />
            Add to Discord
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}