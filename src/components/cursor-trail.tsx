"use client";

import { useEffect, useState } from 'react';

export function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50 transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Trail effect */}
      <div
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </>
  );
}
