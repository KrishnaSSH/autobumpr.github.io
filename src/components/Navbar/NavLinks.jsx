import React from 'react';
import { motion } from 'framer-motion';
import { navigationItems } from '../../config/navigation';

export default function NavLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {navigationItems.map((item) => (
          <motion.li key={item.href}>
            <motion.a
              href={item.href}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}