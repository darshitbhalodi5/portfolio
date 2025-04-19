'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import AnimatedElement from './AnimatedElement';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'ai-tools', label: 'AI Corner' },
  ];

  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-accent/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              <motion.span 
                className="gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Darshit
              </motion.span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={`/#${item.id}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center h-full ${isActive(item.id)
                        ? 'text-accent border-b-2 border-accent'
                        : 'hover:text-accent'
                      }`}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95, y: 1 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="/#contact"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${isActive('contact')
                      ? 'bg-accent text-white'
                      : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20'
                    }`}
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.span>
                </Link>
              </motion.div>
              <motion.button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full bg-background/80 border border-accent/20 hover:bg-accent/10 transition-colors flex items-center justify-center"
                aria-label="Toggle theme"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ 
                  rotate: 180, 
                  scale: 0.9,
                  backgroundColor: theme === 'dark' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(109, 40, 217, 0.2)'
                }}
                transition={{ duration: 0.4 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-background/80 border border-accent/20 hover:bg-accent/10 transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ 
                rotate: 180, 
                scale: 0.9,
                backgroundColor: theme === 'dark' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(109, 40, 217, 0.2)'
              }}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none"
              aria-expanded="false"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm shadow-lg border-t border-accent/10">
            {navItems.map((item, index) => (
              <AnimatedElement
                key={item.id}
                variant="fadeInRight"
                delay={0.05 * index}
              >
                <Link
                  href={`/#${item.id}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.id)
                      ? 'text-accent bg-accent/5'
                      : 'hover:text-accent'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </AnimatedElement>
            ))}
            <AnimatedElement
              variant="fadeInRight"
              delay={0.3}
            >
              <Link
                href="/#contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('contact')
                    ? 'text-accent bg-accent/5'
                    : 'hover:text-accent'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.span
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact
                </motion.span>
              </Link>
            </AnimatedElement>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 