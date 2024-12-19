import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from './common/SectionTitle';

const testimonials = [
  {
    quote: "AutoBumper transformed how we manage our community. Our server growth has been phenomenal!",
    author: "Sarah Chen",
    role: "Community Manager",
    server: "Gaming Hub"
  },
  {
    quote: "The analytics dashboard helps us understand our growth patterns and optimize our strategy.",
    author: "Mike Johnson",
    role: "Server Owner",
    server: "Tech Community"
  },
  {
    quote: "Best investment for our server. The automatic bumping saved us countless hours.",
    author: "Alex Rodriguez",
    role: "Admin",
    server: "Crypto Discussion"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>What Our Users Say</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 relative"
            >
              <FaQuoteLeft className="text-blue-400 text-4xl mb-4" />
              <p className="text-gray-300 mb-6 text-lg">{testimonial.quote}</p>
              <div>
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
                <p className="text-blue-400">{testimonial.server}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}