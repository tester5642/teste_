import React from 'react';
import { useRoute } from 'wouter';
import NetworkBackground from '../components/NetworkBackground';
import { projects } from '../data/projects';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'wouter';
import * as LucideIcons from 'lucide-react';

const ProjectDetail: React.FC = () => {
  // Captura o ID do projeto da URL
  const [, params] = useRoute('/projetos/:id');
  const projectId = params?.id;
  
  // Encontra o projeto com o ID correspondente
  const project = projects.find(p => p.id === projectId);
  
  // Obter o componente de ícone do Lucide
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return LucideIcons.Code;
    return (LucideIcons as any)[iconName] || LucideIcons.Code;
  };
  
  if (!project) {
    return (
      <NetworkBackground>
        <div className="content-overlay min-h-screen">
          <section className="container mx-auto px-4 py-16">
            <div className="bg-secondary-dark/90 rounded-lg p-8 border border-primary/20 shadow-lg">
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Projeto não encontrado</h2>
              <p className="text-gray-300 mb-6">O projeto que você está procurando não existe ou foi removido.</p>
              <Link href="/projetos" className="inline-flex items-center text-primary hover:text-primary/80">
                <ChevronLeft size={16} className="mr-1" />
                Voltar para projetos
              </Link>
            </div>
          </section>
        </div>
      </NetworkBackground>
    );
  }
  
  const IconComponent = getIconComponent(project.iconName);
  
  return (
    <NetworkBackground>
      <div className="content-overlay min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <div className="bg-secondary-dark/90 rounded-lg p-8 border border-primary/20 shadow-lg">
            <div className="mb-6">
              <Link href="/projetos" className="inline-flex items-center text-primary hover:text-primary/80">
                <ChevronLeft size={16} className="mr-1" />
                Voltar para projetos
              </Link>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-primary/20 p-4 rounded-lg mr-4">
                <IconComponent size={48} className="text-primary" />
              </div>
              <h1 className="text-4xl font-heading font-bold text-primary">{project.title}</h1>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(tech => (
                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">Descrição</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
            
            <div className="prose prose-invert prose-primary max-w-none">
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">Detalhes do Projeto</h2>
              {project.content ? (
                <div className="whitespace-pre-line text-gray-300">
                  {project.content}
                </div>
              ) : (
                <div className="text-gray-400 italic">
                  Detalhes completos em breve...
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </NetworkBackground>
  );
};

export default ProjectDetail;