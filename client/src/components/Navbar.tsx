import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { projects } from '../data/projects';
import { articles } from '../data/articles';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bg-dark border-b border-primary/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="home-icon text-primary hover:text-white transition-colors">
            <Home className="w-8 h-8" />
          </a>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          {/* Projects Dropdown */}
          <div className="nav-item relative group">
            <Link href="/projects">
              <a className={`text-primary hover:text-white font-medium transition-colors py-2 ${location === '/projects' ? 'text-white' : ''}`}>
                Projetos
              </a>
            </Link>
            
            {/* Dropdown menu */}
            <div className="dropdown-menu absolute left-0 top-full mt-2 w-64 bg-bg-dark border border-primary/20 rounded shadow-lg overflow-y-auto max-h-60">
              <div className="custom-scrollbar py-2">
                {projects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`}>
                    <a className="block px-4 py-3 hover:bg-black/30 border-b border-primary/10 transition-colors">
                      <div className="font-medium text-primary">{project.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{project.description}</div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Dropdown */}
          <div className="nav-item relative group">
            <Link href="/articles">
              <a className={`text-primary hover:text-white font-medium transition-colors py-2 ${location === '/articles' ? 'text-white' : ''}`}>
                Artigos
              </a>
            </Link>
            
            {/* Dropdown menu */}
            <div className="dropdown-menu absolute left-0 top-full mt-2 w-64 bg-bg-dark border border-primary/20 rounded shadow-lg overflow-y-auto max-h-60">
              <div className="custom-scrollbar py-2">
                {articles.map((article) => (
                  <Link key={article.id} href={`/articles/${article.id}`}>
                    <a className="block px-4 py-3 hover:bg-black/30 border-b border-primary/10 transition-colors">
                      <div className="font-medium text-primary">{article.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{article.description}</div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Link */}
          <Link href="/resume">
            <a className={`text-primary hover:text-white font-medium transition-colors py-2 ${location === '/resume' ? 'text-white' : ''}`}>
              Currículo
            </a>
          </Link>
          
          {/* About Me Link */}
          <Link href="/about">
            <a className={`text-primary hover:text-white font-medium transition-colors py-2 ${location === '/about' ? 'text-white' : ''}`}>
              Sobre mim
            </a>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bg-dark border-b border-primary/20 z-50">
            <div className="flex flex-col p-4">
              <Link href="/projects">
                <a className="text-primary hover:text-white font-medium py-3 border-b border-primary/10">
                  Projetos
                </a>
              </Link>
              <Link href="/articles">
                <a className="text-primary hover:text-white font-medium py-3 border-b border-primary/10">
                  Artigos
                </a>
              </Link>
              <Link href="/resume">
                <a className="text-primary hover:text-white font-medium py-3 border-b border-primary/10">
                  Currículo
                </a>
              </Link>
              <Link href="/about">
                <a className="text-primary hover:text-white font-medium py-3">
                  Sobre mim
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      <style>{`
        /* Custom scrollbar for dropdown menus */
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(30, 30, 30, 0.9);
            border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(164, 255, 0, 0.7);
            border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(164, 255, 0, 1);
        }
        
        /* Dropdown animation */
        .dropdown-menu {
            transform-origin: top center;
            transition: transform 0.2s ease-out, opacity 0.2s ease-out, visibility 0.2s ease-out;
            transform: scaleY(0);
            opacity: 0;
            visibility: hidden;
        }
        
        .nav-item:hover .dropdown-menu {
            transform: scaleY(1);
            opacity: 1;
            visibility: visible;
        }
        
        /* Home icon hover effect */
        .home-icon {
            transition: transform 0.3s ease;
        }
        
        .home-icon:hover {
            transform: scale(1.1);
        }
      `}</style>
    </header>
  );
};

export default Navbar;
