import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500K+', label: 'Daily Bumps' },
  { value: '50K+', label: 'Servers' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}