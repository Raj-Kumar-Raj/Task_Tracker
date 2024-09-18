import React from 'react';
import '../global.css'

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`input ${className}`}
      {...props}
    />
  );
}
