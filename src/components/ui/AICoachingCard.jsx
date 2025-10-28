import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AICoachingCard({
  title = "AI Coaching",
  subtitle = "Personalized AI Guidance",
  icon = "🧠",
  accentColor = "#64c8ff"
}) {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const card = canvas.parentElement;

    const resizeCanvas = () => {
      canvas.width = card.offsetWidth;
      canvas.height = card.offsetHeight;
      generateShapes();
    };

    const generateShapes = () => {
      shapesRef.current = [];
      const w = canvas.width + 300;
      const h = canvas.height + 200;
      const lineCount = 10 + Math.floor(Math.random() * 10);

      // Generate random lines
      for (let i = 0; i < lineCount; i++) {
        const x1 = Math.random() * w;
        const y1 = Math.random() * h;
        const angle = Math.random() * Math.PI * 2;
        const length = Math.random() * 100 + 50;
        const x2 = x1 + Math.cos(angle) * length;
        const y2 = y1 + Math.sin(angle) * length;
        
        shapesRef.current.push({
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          baseOpacity: Math.random() * 0.4 + 0.2,
          rotationSpeed: (Math.random() - 0.5) * 0.0005,
          pulseSpeed: Math.random() * 0.002 + 0.001,
          phase: Math.random() * Math.PI * 2,
          centerX: (x1 + x2) / 2,
          centerY: (y1 + y2) / 2
        });
      }
    };

    const drawShape = (shape, time) => {
      const opacityPulse = Math.sin(time * shape.pulseSpeed + shape.phase) * 0.3 + 0.7;
      const opacity = shape.baseOpacity * opacityPulse;

      // Rotate the line around its center
      const rotation = time * shape.rotationSpeed;
      
      const dx1 = shape.x1 - shape.centerX;
      const dy1 = shape.y1 - shape.centerY;
      const dx2 = shape.x2 - shape.centerX;
      const dy2 = shape.y2 - shape.centerY;
      
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      
      const rotatedX1 = dx1 * cos - dy1 * sin + shape.centerX;
      const rotatedY1 = dx1 * sin + dy1 * cos + shape.centerY;
      const rotatedX2 = dx2 * cos - dy2 * sin + shape.centerX;
      const rotatedY2 = dx2 * sin + dy2 * cos + shape.centerY;

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(rotatedX1, rotatedY1);
      ctx.lineTo(rotatedX2, rotatedY2);
      
      // Create gradient along the line
      const gradient = ctx.createLinearGradient(rotatedX1, rotatedY1, rotatedX2, rotatedY2);
      gradient.addColorStop(0, `rgba(100, 200, 255, ${opacity * 0.3})`);
      gradient.addColorStop(0.5, `rgba(100, 200, 255, ${opacity})`);
      gradient.addColorStop(1, `rgba(100, 200, 255, ${opacity * 0.3})`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw all lines
      shapesRef.current.forEach(shape => drawShape(shape, time));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-3 sm:p-4 md:p-5 h-full">
      <div 
        className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl border border-blue-500/25 bg-transparent p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(79,156,255,0.3)] flex flex-col"
        style={{ 
          minHeight: '300px',
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated border - only on hover - single continuous line */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="movingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(100, 200, 255, 0)" />
                  <stop offset="30%" stopColor="rgba(100, 200, 255, 0)" />
                  <stop offset="50%" stopColor="rgba(100, 200, 255, 1)" />
                  <stop offset="70%" stopColor="rgba(100, 200, 255, 0)" />
                  <stop offset="100%" stopColor="rgba(100, 200, 255, 0)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 2,2 L 98,2 L 98,98 L 2,98 Z"
                fill="none"
                stroke="url(#movingGradient)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray="40 360"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -400 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </svg>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div 
              className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full text-4xl sm:text-5xl md:text-6xl text-white shadow-xl transition-all duration-500 hover:scale-110"
            >
              <div className="flex items-center justify-center">
                {icon}
              </div>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center">
            <h1 className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide transition-all duration-500 text-center" style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}>
              {title}
            </h1>

            <p className="mb-4 text-xs sm:text-sm md:text-base font-light tracking-widest text-cyan-300 uppercase transition-all duration-500 text-center leading-relaxed" style={{
              opacity: isHovered ? 1 : 0.8,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}>
              {subtitle}
            </p>
          </div>

          <div className="flex justify-center mt-auto">
            <div 
              className="h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500"
              style={{
                width: isHovered ? '60px' : '40px',
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(79,156,255, 0.4);
            }
            50% {
              box-shadow: 0 0 40px rgba(79,156,255, 0.8);
            }
          }

          @keyframes pulse-intense {
            0%, 100% {
              box-shadow: 0 0 40px rgba(79,156,255, 0.8), 0 0 80px rgba(79,156,255, 0.4);
            }
            50% {
              box-shadow: 0 0 60px rgba(79,156,255, 1), 0 0 120px rgba(79,156,255, 0.6);
            }
          }

          @media (max-width: 640px) {
            .card-responsive {
              padding: 1rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
}