import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-64 h-64'
  };

  const sizeValues = {
    sm: 96,
    md: 160,
    lg: 256
  };

  // Multiple rotating rings with different speeds and styles
  const ringVariants = (duration, reverse = false) => ({
    animate: {
      rotate: reverse ? -360 : 360,
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear"
      }
    }
  });

  // Orbiting elements
  const orbitParticleVariants = {
    animate: (i) => ({
      scale: [1, 1.5, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut"
      }
    })
  };

  // Floating particles with curved paths
  const floatingVariants = (i) => ({
    animate: {
      y: [0, -40, 0],
      x: [0, Math.sin(i) * 30, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeInOut"
      }
    }
  });

  // Pulsing core - updated without shadow animation
  const coreVariants = {
    animate: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const size_val = sizeValues[size];

  return (
    <motion.div
      className={`${sizeClasses[size]} relative ${className} flex items-center justify-center`}
      style={{ perspective: '1000px' }}
    >
      {/* Outer glow aura */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-blue-600/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Outermost large ring - slow rotation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-500/40"
        variants={ringVariants(40)}
        animate="animate"
      />

      {/* Second ring - medium speed reverse */}
      <motion.div
        className="absolute inset-8 rounded-full border-2 border-cyan-400/50"
        variants={ringVariants(30, true)}
        animate="animate"
      />

      {/* Third ring - fast rotation */}
      <motion.div
        className="absolute inset-16 rounded-full border-2 border-blue-400/40"
        variants={ringVariants(20)}
        animate="animate"
      />

      {/* Fourth decorative ring */}
      <motion.div
        className="absolute inset-24 rounded-full border border-cyan-300/60"
        variants={ringVariants(15, true)}
        animate="animate"
      />

      {/* Orbiting particles - outer orbit */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * Math.PI * 2) / 6;
          const x = 50 + (size_val / 2.2) * Math.cos(angle);
          const y = 50 + (size_val / 2.2) * Math.sin(angle);
          return (
            <motion.div
              key={`outer-particle-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-400/40"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translate(-50%, -50%)'
              }}
              variants={orbitParticleVariants}
              animate="animate"
              custom={i}
              whileHover={{ scale: 2 }}
            />
          );
        })}
      </motion.div>

      {/* Orbiting particles - middle orbit */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI * 2) / 4;
          const x = 50 + (size_val / 3.5) * Math.cos(angle);
          const y = 50 + (size_val / 3.5) * Math.sin(angle);
          return (
            <motion.div
              key={`middle-particle-${i}`}
              className="absolute w-2.5 h-2.5 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full shadow-md shadow-cyan-300/50"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </motion.div>

      {/* Inner neural nodes */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i * Math.PI * 2) / 5;
          const x = 50 + (size_val / 5) * Math.cos(angle);
          const y = 50 + (size_val / 5) * Math.sin(angle);
          return (
            <motion.div
              key={`inner-node-${i}`}
              className="absolute w-2 h-2 bg-cyan-200 rounded-full shadow-sm shadow-cyan-200/60"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </motion.div>

      {/* Floating energy particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full blur-sm"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          variants={floatingVariants(i)}
          animate="animate"
        />
      ))}

      {/* Core with glow - updated shadow */}
      <motion.div
        className="absolute w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl shadow-cyan-500/30"
        variants={coreVariants}
        animate="animate"
      >
        {/* Rotating gradient ring inside core - subtle */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: 'conic-gradient(from 0deg, rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.3))'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Spiral pattern layer */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={`core-ring-${i}`}
              cx="50"
              cy="50"
              r={40 - i * 10}
              fill="none"
              stroke={`rgba(255, 255, 255, ${0.3 - i * 0.06})`}
              strokeWidth="0.5"
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * Math.PI * 2) / 6;
            const x = 50 + 20 * Math.cos(angle);
            const y = 50 + 20 * Math.sin(angle);
            return (
              <circle
                key={`core-dot-${i}`}
                cx={x}
                cy={y}
                r="1.5"
                fill="rgba(255, 255, 255, 0.8)"
              />
            );
          })}
        </motion.svg>

        {/* Pulsing inner layers */}
        <motion.div
          className="absolute inset-2 md:inset-3 lg:inset-4 rounded-full bg-gradient-to-b from-cyan-200/20 via-blue-400/15 to-blue-600/20 backdrop-blur-sm"
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* AI Neural Network Pattern */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(165, 243, 252, 0.15)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
                  <stop offset="100%" stopColor="rgba(99, 102, 241, 0.15)" />
                </linearGradient>
              </defs>
              {/* Neural nodes as stars */}
              {[
                [30, 30], [70, 30], [50, 50], [30, 70], [70, 70]
              ].map(([x, y], i) => {
                const starPoints = [];
                for (let j = 0; j < 5; j++) {
                  const angle = (j * 2 * Math.PI) / 5 - Math.PI / 2;
                  const outerX = x + 4 * Math.cos(angle);
                  const outerY = y + 4 * Math.sin(angle);
                  const innerAngle = angle + Math.PI / 5;
                  const innerX = x + 1.6 * Math.cos(innerAngle);
                  const innerY = y + 1.6 * Math.sin(innerAngle);
                  starPoints.push(`${outerX},${outerY}`);
                  starPoints.push(`${innerX},${innerY}`);
                }
                return (
                  <polygon
                    key={`ai-node-${i}`}
                    points={starPoints.join(' ')}
                    fill="rgba(165, 243, 252, 0.8)"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="0.5"
                  />
                );
              })}
              {/* Neural connections */}
              <line x1="30" y1="30" x2="50" y2="50" stroke="rgba(165, 243, 252, 0.3)" strokeWidth="0.5" />
              <line x1="70" y1="30" x2="50" y2="50" stroke="rgba(165, 243, 252, 0.3)" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="30" y2="70" stroke="rgba(165, 243, 252, 0.3)" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="70" y2="70" stroke="rgba(165, 243, 252, 0.3)" strokeWidth="0.5" />
              <line x1="30" y1="30" x2="70" y2="70" stroke="rgba(165, 243, 252, 0.2)" strokeWidth="0.5" />
              <line x1="70" y1="30" x2="30" y2="70" stroke="rgba(165, 243, 252, 0.2)" strokeWidth="0.5" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Center AI brain pulse */}
        <motion.div
          className="absolute inset-1/3 md:inset-2/5 lg:inset-1/3 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="centerGradient">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="100%" stopColor="rgba(165, 243, 252, 0)" />
              </radialGradient>
            </defs>
            {/* Subtle radiating lines */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const angle = (i * Math.PI * 2) / 8;
              const x = 50 + 30 * Math.cos(angle);
              const y = 50 + 30 * Math.sin(angle);
              return (
                <line
                  key={`burst-${i}`}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
        </motion.div>
      </motion.div>

      {/* Neural connections SVG */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i * Math.PI * 2) / 5;
          const x1 = 50;
          const y1 = 50;
          const x2 = 50 + (size_val / 10) * Math.cos(angle);
          const y2 = 50 + (size_val / 10) * Math.sin(angle);
          return (
            <motion.line
              key={`connection-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#gradientStroke)"
              strokeWidth="2"
              animate={{
                opacity: [0.2, 0.7, 0.2],
                strokeWidth: [1, 2.5, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Diagonal spinning lines */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" style={{ pointerEvents: 'none' }}>
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`diagonal-${i}`}
              x1="50%"
              y1="50%"
              x2={`${50 + 40 * Math.cos((i * Math.PI) / 2)}%`}
              y2={`${50 + 40 * Math.sin((i * Math.PI) / 2)}%`}
              stroke="rgba(34, 211, 238, 0.3)"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;