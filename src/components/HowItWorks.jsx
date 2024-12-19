import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartBar, FaCog, FaUsers } from 'react-icons/fa';
import SectionTitle from './common/SectionTitle';

const steps = [
  {
    icon: FaRocket,
    title: "Quick Setup",
    description: "Add AutoBumper to your server with just a few clicks. No complex configuration needed."
  },
  {
    icon: FaCog,
    title: "Customize Settings",
    description: "Set your preferred bump intervals and customize notification messages to match your server's style."
  },
  {
    icon: FaChartBar,
    title: "Monitor Growth",
    description: "Track your server's performance with real-time analytics and detailed growth metrics."
  },
  {
    icon: FaUsers,
    title: "Grow Community",
    description: "Watch your community flourish as AutoBumper maintains your server's visibility 24/7."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>How It Works</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full w-16 h-16 mx-auto mb-6">
                <div className="bg-[#1a1a2e] w-full h-full rounded-full flex items-center justify-center">
                  <step.icon className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}