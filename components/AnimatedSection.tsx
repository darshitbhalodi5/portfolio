'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'staggerChildren' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  id?: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.6 }
  },
  fadeInUp: {
    opacity: 1,
    y: -30,
    transition: { duration: 0.6 }
  },
  fadeInDown: {
    opacity: 1,
    y: 30,
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    opacity: 1,
    x: -30,
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    opacity: 1,
    x: 30,
    transition: { duration: 0.6 }
  },
  staggerChildren: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AnimatedSection = ({
  children,
  variant = 'fadeIn',
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  id
}: AnimatedSectionProps) => {
  // Set initial and animate states based on the variant
  const initial = variant === 'fadeInUp' ? { opacity: 0, y: 30 } :
                  variant === 'fadeInDown' ? { opacity: 0, y: -30 } :
                  variant === 'fadeInLeft' ? { opacity: 0, x: 30 } :
                  variant === 'fadeInRight' ? { opacity: 0, x: -30 } :
                  { opacity: 0 };
                  
  // For whileInView, use the variant key for variants that exist in our variants object
  const whileInView = variant !== 'none' ? 
                      (variant === 'fadeIn' || variant === 'fadeInUp' || 
                       variant === 'fadeInDown' || variant === 'fadeInLeft' || 
                       variant === 'fadeInRight' || variant === 'staggerChildren') ? 
                        variant : 'fadeIn' : undefined;

  return (
    <motion.section
      id={id}
      className={className}
      initial={variant !== 'none' ? initial : false}
      whileInView={whileInView}
      viewport={{ once, margin: '-100px' }}
      variants={variants}
      transition={{ 
        delay, 
        duration,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 