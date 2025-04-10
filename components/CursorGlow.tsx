import React, { useState, useEffect } from 'react';
import './styles/CursorGlow.module.css'; // Import your CSS file for the glow effect

const CustomCursor = () => {
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Event handler for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Add event listener when component mounts
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="glow-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
