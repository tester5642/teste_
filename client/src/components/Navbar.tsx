import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { projects } from '../data/projects';
import { articles } from '../data/articles';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bg-dark border-b border-primary/20 fixed top-0 left-0 right-0 w-full z-[1000] backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="home-icon text-primary hover:text-white transition-colors cursor-pointer">
            <Home className="w-8 h-8" />
          </div>
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
              <div className={`text-primary hover:text-white font-medium transition-colors py-2 cursor-pointer ${location === '/projects' ? 'text-white' : ''}`}>
                Projetos
              </div>
            </Link>
            
            {/* Dropdown menu */}
            <div className="dropdown-menu absolute left-0 top-full mt-2 w-64 bg-bg-dark border border-primary/20 rounded shadow-lg overflow-y-auto max-h-60 z-[1001] backdrop-blur-sm">
              <div className="custom-scrollbar py-2">
                {projects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`}>
                    <div className="block px-4 py-3 hover:bg-black/30 border-b border-primary/10 transition-colors cursor-pointer">
                      <div className="font-medium text-primary">{project.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{project.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Dropdown */}
          <div className="nav-item relative group">
            <Link href="/articles">
              <div className={`text-primary hover:text-white font-medium transition-colors py-2 cursor-pointer ${location === '/articles' ? 'text-white' : ''}`}>
                Artigos
              </div>
            </Link>
            
            {/* Dropdown menu */}
            <div className="dropdown-menu absolute left-0 top-full mt-2 w-64 bg-bg-dark border border-primary/20 rounded shadow-lg overflow-y-auto max-h-60 z-[1001] backdrop-blur-sm">
              <div className="custom-scrollbar py-2">
                {articles.map((article) => (
                  <Link key={article.id} href={`/articles/${article.id}`}>
                    <div className="block px-4 py-3 hover:bg-black/30 border-b border-primary/10 transition-colors cursor-pointer">
                      <div className="font-medium text-primary">{article.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{article.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Link */}
          <Link href="/resume">
            <div className={`text-primary hover:text-white font-medium transition-colors py-2 cursor-pointer ${location === '/resume' ? 'text-white' : ''}`}>
              Currículo
            </div>
          </Link>
          
          {/* About Me Link */}
          <Link href="/about">
            <div className={`text-primary hover:text-white font-medium transition-colors py-2 cursor-pointer ${location === '/about' ? 'text-white' : ''}`}>
              Sobre mim
            </div>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bg-dark border-b border-primary/20 z-[1001] shadow-lg backdrop-blur-sm">
            <div className="flex flex-col p-4">
              <Link href="/projects">
                <div className="text-primary hover:text-white font-medium py-3 border-b border-primary/10 cursor-pointer">
                  Projetos
                </div>
              </Link>
              <Link href="/articles">
                <div className="text-primary hover:text-white font-medium py-3 border-b border-primary/10 cursor-pointer">
                  Artigos
                </div>
              </Link>
              <Link href="/resume">
                <div className="text-primary hover:text-white font-medium py-3 border-b border-primary/10 cursor-pointer">
                  Currículo
                </div>
              </Link>
              <Link href="/about">
                <div className="text-primary hover:text-white font-medium py-3 cursor-pointer">
                  Sobre mim
                </div>
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
