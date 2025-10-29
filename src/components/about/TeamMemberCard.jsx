import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member, index }) => {
  const canvasRef = useRef(null);
  const borderCanvasRef = useRef(null);
  const shapesRef = useRef([]);
  const animationRef = useRef(null);
  const borderAnimationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseNear, setIsMouseNear] = useState(false);
  const [borderOpacity, setBorderOpacity] = useState(0);
  const [distanceToCard, setDistanceToCard] = useState(150);
  const targetPosRef = useRef(0);
  const currentPosRef = useRef(0);
  const targetOpacityRef = useRef(0);
  const currentOpacityRef = useRef(0);

  // Track global mouse position for detecting nearby mouse
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const card = borderCanvasRef.current?.parentElement;
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate distance from mouse to card edges
      const distanceX = Math.max(rect.left - mouseX, mouseX - rect.right, 0);
      const distanceY = Math.max(rect.top - mouseY, mouseY - rect.bottom, 0);
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Show border when mouse is within 150px of card
      if (distance < 150) {
        setIsMouseNear(true);
        setDistanceToCard(distance);
        // Calculate relative position even when outside
        setMousePos({
          x: mouseX - rect.left,
          y: mouseY - rect.top
        });
      } else {
        setIsMouseNear(false);
        setDistanceToCard(150);
      }
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  // Background particle animation
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

      ctx.beginPath();
      ctx.moveTo(rotatedX1, rotatedY1);
      ctx.lineTo(rotatedX2, rotatedY2);
      
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

  // Animated border effect
  useEffect(() => {
    const canvas = borderCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const card = canvas.parentElement;

    const resizeCanvas = () => {
      const padding = 40;
      canvas.width = card.offsetWidth + padding * 2;
      canvas.height = card.offsetHeight + padding * 2;
      canvas.style.left = `-${padding}px`;
      canvas.style.top = `-${padding}px`;
    };

    const drawBorder = () => {
      const padding = 40;
      const w = canvas.width - padding * 2;
      const h = canvas.height - padding * 2;
      const borderRadius = 16;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw static border background
      ctx.beginPath();
      ctx.roundRect(padding, padding, w, h, borderRadius);
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Update target opacity based on hover/mouse near state
      targetOpacityRef.current = (isMouseNear || isHovered) ? 1 : 0;
      
      // Smooth opacity transition
      currentOpacityRef.current += (targetOpacityRef.current - currentOpacityRef.current) * 0.1;
      setBorderOpacity(currentOpacityRef.current);
      
      // Only draw animated border if opacity is significant
      if (currentOpacityRef.current < 0.01) {
        borderAnimationRef.current = requestAnimationFrame(drawBorder);
        return;
      }
      
      // Calculate perimeter
      const perimeter = 2 * (w + h) - 8 * borderRadius + 2 * Math.PI * borderRadius;
      
      // Helper function to get point on rounded rectangle border
      const getPointOnBorder = (dist) => {
        const r = borderRadius;
        let d = dist;
        
        // Normalize to perimeter range
        d = ((d % perimeter) + perimeter) % perimeter;
        
        // Top edge
        if (d < w - 2 * r) {
          return { x: r + d + padding, y: padding };
        }
        d -= (w - 2 * r);
        
        // Top-right corner
        if (d < Math.PI * r / 2) {
          const angle = -Math.PI / 2 + d / r;
          return { x: w - r + r * Math.cos(angle) + padding, y: r + r * Math.sin(angle) + padding };
        }
        d -= Math.PI * r / 2;
        
        // Right edge
        if (d < h - 2 * r) {
          return { x: w + padding, y: r + d + padding };
        }
        d -= (h - 2 * r);
        
        // Bottom-right corner
        if (d < Math.PI * r / 2) {
          const angle = d / r;
          return { x: w - r + r * Math.cos(angle) + padding, y: h - r + r * Math.sin(angle) + padding };
        }
        d -= Math.PI * r / 2;
        
        // Bottom edge
        if (d < w - 2 * r) {
          return { x: w - r - d + padding, y: h + padding };
        }
        d -= (w - 2 * r);
        
        // Bottom-left corner
        if (d < Math.PI * r / 2) {
          const angle = Math.PI / 2 + d / r;
          return { x: r + r * Math.cos(angle) + padding, y: h - r + r * Math.sin(angle) + padding };
        }
        d -= Math.PI * r / 2;
        
        // Left edge
        if (d < h - 2 * r) {
          return { x: padding, y: h - r - d + padding };
        }
        d -= (h - 2 * r);
        
        // Top-left corner
        const angle = Math.PI + d / r;
        return { x: r + r * Math.cos(angle) + padding, y: r + r * Math.sin(angle) + padding };
      };
      
      // Find closest point on border to mouse
      const findClosestPointOnBorder = () => {
        let minDist = Infinity;
        let closestDist = 0;
        const samples = 300;
        
        for (let i = 0; i < samples; i++) {
          const dist = (i / samples) * perimeter;
          const p = getPointOnBorder(dist);
          const dx = p.x - (mousePos.x + padding);
          const dy = p.y - (mousePos.y + padding);
          const d = Math.sqrt(dx * dx + dy * dy);
          
          if (d < minDist) {
            minDist = d;
            closestDist = dist;
          }
        }
        
        return closestDist;
      };
      
      // Smooth interpolation
      targetPosRef.current = findClosestPointOnBorder();
      
      // Handle wraparound for smooth animation
      let diff = targetPosRef.current - currentPosRef.current;
      if (Math.abs(diff) > perimeter / 2) {
        if (diff > 0) {
          diff -= perimeter;
        } else {
          diff += perimeter;
        }
      }
      
      currentPosRef.current += diff * 0.15;
      
      // Keep currentPos within bounds using proper modulo
      currentPosRef.current = ((currentPosRef.current % perimeter) + perimeter) % perimeter;
      
      // Dynamic gradient length based on distance to card
      // When mouse is far (150px): shorter line (15% of perimeter)
      // When mouse is close (0px): longer line (40% of perimeter)
      const maxDistance = 150;
      const distanceRatio = Math.max(0, Math.min(1, 1 - (distanceToCard / maxDistance)));
      const minGradientLength = perimeter * 0.15;
      const maxGradientLength = perimeter * 0.40;
      const gradientLength = minGradientLength + (maxGradientLength - minGradientLength) * distanceRatio;
      
      // Draw the gradient line with smooth opacity
      const segments = 100;
      for (let i = 0; i < segments; i++) {
        const segProgress = i / segments;
        const dist = currentPosRef.current - gradientLength / 2 + segProgress * gradientLength;
        const nextDist = currentPosRef.current - gradientLength / 2 + (i + 1) / segments * gradientLength;
        
        const p1 = getPointOnBorder(dist);
        const p2 = getPointOnBorder(nextDist);
        
        // Calculate opacity based on position in gradient
        let alpha = 0;
        if (segProgress < 0.2) {
          alpha = segProgress / 0.2;
        } else if (segProgress > 0.8) {
          alpha = (1 - segProgress) / 0.2;
        } else {
          alpha = 1;
        }
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        
        // Apply smooth fade in/out opacity
        ctx.strokeStyle = `hsla(200, 100%, 70%, ${alpha * currentOpacityRef.current})`;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      
      borderAnimationRef.current = requestAnimationFrame(drawBorder);
    };

    resizeCanvas();
    borderAnimationRef.current = requestAnimationFrame(drawBorder);

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (borderAnimationRef.current) {
        cancelAnimationFrame(borderAnimationRef.current);
      }
    };
  }, [isHovered, isMouseNear, mousePos, distanceToCard]);

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.9 },
    inView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { 
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const borderVariants = {
    initial: { 
      boxShadow: "0 0 0 2px rgba(79,156,255,0.3)"
    },
    hover: { 
      boxShadow: "0 0 0 3px rgba(79,156,255,0.8), 0 0 30px rgba(79,156,255,0.4)",
      transition: { duration: 0.4 }
    }
  };

  const nameVariants = {
    initial: { y: 0 },
    hover: { 
      y: -4,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const roleVariants = {
    initial: { opacity: 0.8, y: 0 },
    hover: { 
      opacity: 1,
      y: -2,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.05 }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      style={{ 
        perspective: 1000,
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: isHovered 
          ? '0 30px 60px -12px rgba(100, 200, 255, 0.1), 0 0 100px rgba(100, 200, 255, 0.2)' 
          : '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsMouseNear(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsMouseNear(false);
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        
        // Check if mouse is near the card (within 100px)
        const distanceFromEdge = Math.min(
          e.clientX - rect.left,
          e.clientY - rect.top,
          rect.right - e.clientX,
          rect.bottom - e.clientY
        );
        setIsMouseNear(distanceFromEdge < 100 || true);
      }}
      className="relative w-full h-full overflow-hidden rounded-2xl bg-slate-800/10 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col"
    >
      {/* Animated border canvas */}
      <canvas
        ref={borderCanvasRef}
        className="absolute pointer-events-none"
        style={{ zIndex: 20 }}
      />

      {/* Background particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ zIndex: 1 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" style={{ zIndex: 3 }} />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          <motion.div 
            className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden relative"
            variants={borderVariants}
          >
            {/* Static border instead of rotating animation */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/50" />
            <motion.img 
              src={member.image} 
              alt={member.name} 
              className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full z-20"
              variants={imageVariants}
            />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={nameVariants}
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              backgroundSize: isHovered ? '200% 100%' : '100% 100%',
            }}
          >
            {member.name}
          </motion.h3>
          
          <motion.p 
            className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors duration-300 uppercase text-sm tracking-wider"
            variants={roleVariants}
            style={{
              opacity: isHovered ? 1 : 0.7,
              transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
              textShadow: isHovered ? '0 0 20px rgba(100, 200, 255, 0.6)' : 'none'
            }}
          >
            {member.role}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              width: isHovered ? '60%' : '0',
              boxShadow: isHovered ? '0 0 20px rgba(100, 200, 255, 0.8)' : 'none'
            }}
          />

          {/* Data stream effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
                  style={{
                    top: `${15 + i * 15}%`,
                    left: '-100%',
                    width: '100%',
                    animation: `dataStream ${1.5 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes dataStream {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default TeamMemberCard;