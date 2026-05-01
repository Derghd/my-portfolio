import React from 'react';

export default function SectionLabel({ label }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
      {label}
    </span>
  );
}