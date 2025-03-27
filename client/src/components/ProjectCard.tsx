import React from 'react';
import { Link } from 'wouter';
import { BarChart3, Database, LineChart, ServerCog, GitBranch, LayoutDashboard } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Function to get the icon component based on the iconName
  const getIconComponent = (iconName: string | undefined) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-16 h-16 text-primary" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-16 h-16 text-primary" />;
      case 'LineChart':
        return <LineChart className="w-16 h-16 text-primary" />;
      case 'ServerCog':
        return <ServerCog className="w-16 h-16 text-primary" />;
      case 'GitBranch':
        return <GitBranch className="w-16 h-16 text-primary" />;
      case 'Database':
        return <Database className="w-16 h-16 text-primary" />;
      default:
        return <BarChart3 className="w-16 h-16 text-primary" />;
    }
  };

  return (
    <div className="bg-secondary-dark/90 rounded-lg overflow-hidden border border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow">
      <div className="h-48 bg-gradient-to-r from-bg-dark to-primary-dark flex items-center justify-center">
        {getIconComponent(project.iconName)}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded bg-primary/20 text-primary">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.id}`}>
          <a className="inline-block px-4 py-2 bg-primary text-bg-dark font-medium rounded hover:bg-primary-dark transition-colors">
            Ver detalhes
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
