import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../config/navigation';
import { FaTimes } from 'react-icons/fa';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-y-0 right-0 w-64 bg-[#1a1a2e] shadow-lg p-6 z-50"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <FaTimes className="text-xl" />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white block py-2"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}