import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              <span className="gradient-text">Darshit Bhalodi</span>
            </Link>
            <p className="mt-2 text-sm text-foreground/70">
              DApp Developer & Server Administrator
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
                <Github className="w-5 h-5 hover:text-accent transition-colors" />
              </a>
              <a href={process.env.NEXT_PUBLIC_X_URL} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5 hover:text-accent transition-colors" />
              </a>
              <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 hover:text-accent transition-colors" />
              </a>
            </div>
            <p className="text-sm text-foreground/70">
              © {currentYear} Darshit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 