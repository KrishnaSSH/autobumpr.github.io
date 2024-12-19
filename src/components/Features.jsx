import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaShieldAlt, FaCog } from 'react-icons/fa';

const features = [
  {
    icon: FaClock,
    title: 'Automatic Bumping',
    description: 'Never miss a bump with our automated system that keeps your server at the top'
  },
  {
    icon: FaChartLine,
    title: 'Analytics Dashboard',
    description: 'Track your server\'s growth and bump performance with detailed analytics'
  },
  {
    icon: FaShieldAlt,
    title: 'Smart Protection',
    description: 'Advanced algorithms to prevent spam and maintain server quality'
  },
  {
    icon: FaCog,
    title: 'Custom Settings',
    description: 'Customize bump intervals and messages to match your server\'s needs'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}