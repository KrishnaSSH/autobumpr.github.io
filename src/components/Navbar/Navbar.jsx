import React, { useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FaBars, FaDiscord } from 'react-icons/fa';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(26, 26, 46, 0)', 'rgba(26, 26, 46, 0.8)']
  );
  const borderRadius = useTransform(
    scrollY,
    [0, 100],
    ['0px', '32px']
  );
  const marginTop = useTransform(
    scrollY,
    [0, 100],
    ['0px', '16px']
  );
  const scale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.98]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          backgroundColor,
          borderRadius,
          marginTop,
          scale,
          x: '-50%'
        }}
        className="fixed top-0 left-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 backdrop-blur-md border border-white/10"
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#" 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AutoBumper
            </motion.a>

            <NavLinks />

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300"
              >
                <FaDiscord className="mr-2" />
                Add to Discord
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-gray-300 hover:text-white bg-white/10 p-2 rounded-full"
              >
                <FaBars className="text-xl" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}