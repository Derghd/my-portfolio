import React from 'react';
import { motion } from 'framer-motion';

export default function SkillTile({ name, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: 'hsl(211, 100%, 50%)', color: 'white' }}
      transition={{ duration: 0.2 }}
      className="glass rounded-2xl px-4 py-3 text-center cursor-default"
    >
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
}