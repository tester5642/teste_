import React from 'react';
import NetworkBackground from '../components/NetworkBackground';
import { User, Linkedin, Github, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personal-info';

const About: React.FC = () => {
  // Desestruturação dos dados pessoais do arquivo de configuração
  const { name, title, bio, socialMedia, email, phone, location } = personalInfo;
  
  return (
    <NetworkBackground>
      <div className="content-overlay min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-heading font-bold mb-8 border-b border-primary pb-4 text-primary">Sobre Mim</h2>
          
          <div className="bg-secondary-dark/90 rounded-lg overflow-hidden border border-primary/20 shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-bg-dark to-primary-dark flex items-center justify-center p-8">
                <div className="w-48 h-48 rounded-full bg-secondary-dark/70 border-4 border-primary flex items-center justify-center">
                  <User className="w-24 h-24 text-primary" />
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{name}</h3>
                <h4 className="text-xl text-gray-300 mb-6">{title}</h4>
                
                {/* Contato */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {email && (
                    <div className="flex items-center text-gray-300">
                      <Mail className="h-5 w-5 mr-2 text-primary" />
                      <span>{email}</span>
                    </div>
                  )}
                  
                  {phone && (
                    <div className="flex items-center text-gray-300">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      <span>{phone}</span>
                    </div>
                  )}
                  
                  {location && (
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      <span>{location}</span>
                    </div>
                  )}
                </div>
                
                {/* Biografia */}
                <div className="space-y-4 text-gray-300">
                  {bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                {/* Redes Sociais */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-primary">Conecte-se comigo</h4>
                  <div className="flex space-x-4">
                    {socialMedia.linkedin && (
                      <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                        <Linkedin className="h-8 w-8" />
                      </a>
                    )}
                    
                    {socialMedia.github && (
                      <a href={socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                        <Github className="h-8 w-8" />
                      </a>
                    )}
                    
                    {socialMedia.twitter && (
                      <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                        <Twitter className="h-8 w-8" />
                      </a>
                    )}
                    
                    {socialMedia.instagram && (
                      <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                        <Instagram className="h-8 w-8" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Nota para o usuário */}
          <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-primary">Para personalizar esta página:</h3>
            <p className="text-gray-300 mb-4">
              Edite o arquivo <code className="bg-black/30 px-2 py-1 rounded">client/src/data/personal-info.ts</code> para atualizar suas informações pessoais.
            </p>
            <p className="text-gray-300">
              O arquivo contém campos como seu nome, título, biografia, informações de contato e links para redes sociais.
            </p>
          </div>
        </section>
      </div>
    </NetworkBackground>
  );
};

export default About;
