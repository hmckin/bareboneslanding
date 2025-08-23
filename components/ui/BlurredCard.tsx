"use client"

import React, { useState, useEffect, useRef } from 'react'

interface BlurredCardProps {
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  number?: string;
  animation?: string;
  children?: React.ReactNode;
}

const BlurredCard: React.FC<BlurredCardProps> = ({ 
  fromColor = "from-cyan-400", 
  viaColor = "via-cyan-400",
  toColor = "to-cyan-400",
  number = "1",
  animation = "animate-glow-drift",
  children
}) => {
  const [isInFocus, setIsInFocus] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      
      // Check if the card is in the center focus area
      if (rect.top <= centerY && rect.bottom >= centerY) {
        setIsInFocus(true);
      } else {
        setIsInFocus(false);
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={cardRef} className="relative w-[500px] h-[500px] bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Blurred gradient glow - only visible when in focus */}
      <div 
        className={`absolute -bottom-24 left-0 right-0 mx-auto w-[500px] h-[250px] bg-gradient-to-t ${fromColor} ${viaColor} ${toColor} rounded-full blur-2xl ${animation}`}
        style={{ 
          opacity: isInFocus ? 0.8 : 0,
          transition: 'opacity 1s ease-in-out, transform 0.5s ease-in-out'
        }}
      ></div>
      
              {/* Content - either children or number */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {children ? (
            children
          ) : (
            <span className="text-8xl md:text-10xl font-bold text-black">{number}</span>
          )}
        </div>
    </div>
  )
}

export default BlurredCard
