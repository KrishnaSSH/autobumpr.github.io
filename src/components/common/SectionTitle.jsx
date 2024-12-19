import React from 'react';
import GradientText from './GradientText';

export default function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      <GradientText>{children}</GradientText>
    </h2>
  );
}