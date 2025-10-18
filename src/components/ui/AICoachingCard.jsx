import React, { useEffect, useRef, useState } from 'react';

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
      const w = canvas.width;
      const h = canvas.height;
      const shapeCount = 5 + Math.floor(Math.random() * 4);

      for (let i = 0; i < shapeCount; i++) {
        const shapeType = Math.floor(Math.random() * 2); // Only circles and squares
        const randomX = Math.random() * w;
        const randomY = Math.random() * h;
        
        shapesRef.current.push({
          baseX: randomX,
          baseY: randomY,
          size: Math.random() * 80 + 60,
          baseOpacity: Math.random() * 0.08 + 0.04,
          shapeType: shapeType,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.003,
          floatSpeed: Math.random() * 0.08 + 0.04,
          floatAmount: Math.random() * 40 + 20,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const drawShape = (shape, time) => {
      const floatX = Math.sin(time * shape.floatSpeed * 0.0005 + shape.phase) * shape.floatAmount;
      const floatY = Math.cos(time * shape.floatSpeed * 0.0005 + shape.phase) * shape.floatAmount;

      const x = shape.baseX + floatX;
      const y = shape.baseY + floatY;

      const opacityPulse = Math.sin(time * 0.0008 + shape.phase) * 0.4 + 0.8;
      const opacity = shape.baseOpacity * opacityPulse;

      ctx.fillStyle = `rgba(100, 200, 255, ${opacity * 0.5})`;
      ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
      ctx.lineWidth = 2;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(shape.rotation + time * shape.rotationSpeed * 0.0005);

      if (shape.shapeType === 0) {
        // Circle
        ctx.beginPath();
        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        // Square
        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      }

      ctx.restore();
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-xl sm:rounded-2xl border border-blue-500/25 bg-transparent p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(79,156,255,0.3)]"
        style={{ 
          aspectRatio: '16/9',
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <div 
            className="mb-6 sm:mb-8 flex h-14 w-1 sm:h-16 sm:w-1 md:h-2 md:w-2 items-center justify-center rounded-full text-white shadow-xl transition-all duration-500 hover:scale-110"
            style={{
              boxShadow: isHovered 
                ? `0 0 40px rgba(79,156,255,0.8), 0 0 80px rgba(79,156,255,0.4)` 
                : `0 0 20px rgba(79,156,255,0.4)`,
              animation: isHovered 
                ? 'pulse-intense 1.5s ease-in-out infinite' 
                : 'pulse 3s ease-in-out infinite'
            }}
          >
            <div className="flex items-center justify-center">
              {icon}
            </div>
          </div>

          <h1 className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide transition-all duration-500" style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}>
            {title}
          </h1>

          <p className="mb-4 text-xs sm:text-sm md:text-base font-medium tracking-widest text-cyan-300 uppercase transition-all duration-500" style={{
            opacity: isHovered ? 1 : 0.8,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}>
            {subtitle}
          </p>

          <div 
            className="h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500"
            style={{
              width: isHovered ? '60px' : '40px',
            }}
          />
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
