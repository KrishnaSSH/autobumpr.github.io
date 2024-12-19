import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaArrowRight } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Grow Your Community?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of successful Discord servers using AutoBumper today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-lg flex items-center justify-center"
            >
              <FaDiscord className="mr-2 text-xl" />
              Add to Discord
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-lg flex items-center justify-center"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}