'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'flip' | 'none';

interface AnimatedElementProps {
  children: ReactNode;
  variant?: AnimationVariant;
  className?: string;
  delay?: number;
  duration?: number;
  onClick?: () => void;
  whileHover?: 'scale' | 'glow' | 'none';
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
    rotateY: 0
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  fadeInUp: {
    opacity: 1,
    y: -20,
    transition: { duration: 0.5 }
  },
  fadeInDown: {
    opacity: 1,
    y: 20,
    transition: { duration: 0.5 }
  },
  fadeInLeft: {
    opacity: 1,
    x: -20,
    transition: { duration: 0.5 }
  },
  fadeInRight: {
    opacity: 1,
    x: 20,
    transition: { duration: 0.5 }
  },
  scale: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  },
  flip: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6 }
  }
};

const hoverVariants = {
  scale: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  glow: {
    boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)',
    transition: { duration: 0.2 }
  },
  none: {}
};

const AnimatedElement = ({
  children,
  variant = 'fadeIn',
  className = '',
  delay = 0,
  duration = 0.5,
  onClick,
  whileHover = 'none'
}: AnimatedElementProps) => {
  const initial = variant === 'fadeInUp' ? { opacity: 0, y: 20 } :
                 variant === 'fadeInDown' ? { opacity: 0, y: -20 } :
                 variant === 'fadeInLeft' ? { opacity: 0, x: 20 } :
                 variant === 'fadeInRight' ? { opacity: 0, x: -20 } :
                 variant === 'scale' ? { opacity: 0, scale: 0.9 } :
                 variant === 'flip' ? { opacity: 0, rotateY: 90 } :
                 { opacity: 0 };

  return (
    <motion.div
      className={className}
      initial={variant !== 'none' ? initial : false}
      animate={variant !== 'none' ? variant : undefined}
      variants={variants}
      whileHover={whileHover !== 'none' ? hoverVariants[whileHover] : undefined}
      transition={{ 
        delay, 
        duration, 
        ease: 'easeOut' 
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 