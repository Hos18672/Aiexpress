import { useEffect, useRef, useState } from 'react';

export const useAnimatedBorder = () => {
  const borderCanvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseNear, setIsMouseNear] = useState(false);
  const targetPosRef = useRef(0);
  const currentPosRef = useRef(0);

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
        // Calculate relative position even when outside
        setMousePos({
          x: mouseX - rect.left,
          y: mouseY - rect.top
        });
      } else {
        setIsMouseNear(false);
      }
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
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
      ctx.strokeStyle = isMouseNear || isHovered ? 'rgba(100, 200, 255, 0.1)' : 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      if (!isMouseNear && !isHovered) {
        animationRef.current = requestAnimationFrame(drawBorder);
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
      
      const gradientLength = perimeter * 0.35;
      
      // Draw the gradient line
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
        
        ctx.strokeStyle = `hsla(200, 100%, 70%, ${alpha})`;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      
      animationRef.current = requestAnimationFrame(drawBorder);
    };

    resizeCanvas();
    animationRef.current = requestAnimationFrame(drawBorder);

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isMouseNear, mousePos]);

  const borderEventHandlers = {
    onMouseEnter: () => {
      setIsHovered(true);
      setIsMouseNear(true);
    },
    onMouseLeave: () => {
      setIsHovered(false);
      setIsMouseNear(false);
    },
    onMouseMove: (e) => {
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
    }
  };

  return {
    borderCanvasRef,
    isHovered,
    borderEventHandlers
  };
};