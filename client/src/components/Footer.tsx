import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { personalInfo } from '../data/personal-info';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { name, title, socialMedia, email } = personalInfo;
  
  return (
    <footer className="bg-bg-dark py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-primary text-lg font-bold mb-2">Portfólio {title && `de ${title}`}</p>
            <p className="text-gray-400 text-sm">{personalInfo.footerTagline || "Analytics | Visualização | Machine Learning"}</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialMedia.github && (
              <a 
                href={socialMedia.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            
            {socialMedia.linkedin && (
              <a 
                href={socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            
            {socialMedia.instagram && (
              <a 
                href={socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">© {currentYear} {name || "Portfólio"}</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="text-xs text-gray-500">
            Desenvolvido com <span className="text-primary">❤</span> por {name || "Matheus Nascimento"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
