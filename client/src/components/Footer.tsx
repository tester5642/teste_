import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-dark py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary text-lg font-bold mb-2">Portfólio de Dados</p>
            <p className="text-gray-400 text-sm">Analytics | Visualização | Machine Learning</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">© {currentYear} Portfólio de Dados</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="text-xs text-gray-500">Desenvolvido com <span className="text-primary">❤</span> por Matheus Nascimento</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
