import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLock, FaHeadset, FaCode } from 'react-icons/fa';
import SectionTitle from './common/SectionTitle';

const reasons = [
  {
    icon: FaBolt,
    title: "Lightning Fast",
    description: "Optimized performance ensures your bumps are processed instantly without any delays."
  },
  {
    icon: FaLock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee for peace of mind."
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you succeed."
  },
  {
    icon: FaCode,
    title: "Regular Updates",
    description: "Continuous improvements and new features to enhance your experience."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Why Choose AutoBumper</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-6 bg-white/5 backdrop-blur-lg rounded-xl p-8"
            >
              <div className="text-blue-400 text-3xl">
                <reason.icon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}