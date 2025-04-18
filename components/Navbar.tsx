'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
  ];

  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              <span className="gradient-text">Darshit</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={`/#${item.id}`} 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.id) 
                      ? 'text-accent border-b-2 border-accent' 
                      : 'hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/#contact" 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('contact')
                    ? 'bg-accent text-white' 
                    : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none"
              aria-expanded="false"
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
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm shadow-lg border-t border-accent/10">
            {navItems.map((item) => (
              <Link 
                key={item.id}
                href={`/#${item.id}`} 
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.id) 
                    ? 'text-accent bg-accent/5' 
                    : 'hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('contact') 
                  ? 'text-accent bg-accent/5' 
                  : 'hover:text-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 