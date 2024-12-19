import React from 'react';
import { motion } from 'framer-motion';
import DynamicBackground from './DynamicBackground';

export default function Section({ children, className = '', id }) {
  return (
    <DynamicBackground>
      <motion.section
        id={id}
        className={`relative py-32 px-4 overflow-hidden ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    </DynamicBackground>
  );
}