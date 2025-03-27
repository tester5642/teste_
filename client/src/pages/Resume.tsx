import React from 'react';
import NetworkBackground from '../components/NetworkBackground';
import { skills } from '../data/skills';
import { personalInfo } from '../data/personal-info';
import * as LucideIcons from 'lucide-react';

const Resume: React.FC = () => {
  // Carrega as informações pessoais
  const { workExperience, education, certifications } = personalInfo;
  
  // Função para mapear o nível de habilidade para texto e largura da barra
  const getSkillLevelInfo = (level: number) => {
    const levelMap = {
      1: { text: 'Básico', width: '20%' },
      2: { text: 'Básico-Intermediário', width: '40%' },
      3: { text: 'Intermediário', width: '60%' },
      4: { text: 'Intermediário-Avançado', width: '80%' },
      5: { text: 'Avançado', width: '95%' }
    };
    return levelMap[level as keyof typeof levelMap] || { text: 'N/A', width: '0%' };
  };

  // Agrupar habilidades por categoria
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  // Obter o componente de ícone do Lucide
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return LucideIcons.Code;
    return (LucideIcons as any)[iconName] || LucideIcons.Code;
  };
  
  return (
    <NetworkBackground>
      <div className="content-overlay min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-heading font-bold mb-8 border-b border-primary pb-4 text-primary">Currículo</h2>
          
          <div className="bg-secondary-dark/90 rounded-lg p-8 border border-primary/20 shadow-lg">
            {/* Experience Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">Experiência Profissional</h3>
              
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className={`border-l-4 ${index === 0 ? 'border-primary' : 'border-primary/70'} pl-6`}>
                    <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                    <p className={`${index === 0 ? 'text-primary' : 'text-primary/90'} mb-2`}>{job.company} • {job.period}</p>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                  </div>
                ))}
                
                {workExperience.length === 0 && (
                  <div className="text-gray-400 italic">
                    <p>Adicione sua experiência profissional editando o arquivo <code className="bg-black/30 px-2 py-1 rounded">client/src/data/personal-info.ts</code></p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">Formação Acadêmica</h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`border-l-4 ${index === 0 ? 'border-primary' : 'border-primary/70'} pl-6`}>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className={`${index === 0 ? 'text-primary' : 'text-primary/90'} mb-2`}>{edu.institution} • {edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
                
                {education.length === 0 && (
                  <div className="text-gray-400 italic">
                    <p>Adicione sua formação acadêmica editando o arquivo <code className="bg-black/30 px-2 py-1 rounded">client/src/data/personal-info.ts</code></p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Certifications Section */}
            {certifications && certifications.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-primary">Certificações</h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-primary/60 pl-6">
                      <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                      <p className="text-primary/80 mb-2">{cert.issuer} • {cert.date}</p>
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline inline-flex items-center"
                        >
                          <LucideIcons.ExternalLink size={14} className="mr-1" />
                          Ver certificado
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Habilidades</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h4 className="text-xl font-bold mb-4 text-white">{category}</h4>
                    <div className="space-y-3">
                      {categorySkills.map(skill => {
                        const levelInfo = getSkillLevelInfo(skill.level);
                        const IconComponent = getIconComponent(skill.iconName);
                        
                        return (
                          <div key={skill.id}>
                            <div className="flex justify-between mb-1 items-center">
                              <span className="text-gray-300 flex items-center">
                                <IconComponent size={16} className="mr-2 text-primary" />
                                {skill.name}
                              </span>
                              <span className="text-primary">{levelInfo.text}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{width: levelInfo.width}}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
{/* 
  Instruções para personalização:
  1. Edite o arquivo client/src/data/personal-info.ts para atualizar suas experiências profissionais, formação e certificações.
  2. Edite o arquivo client/src/data/skills.ts para atualizar suas habilidades e competências.
*/}
        </section>
      </div>
    </NetworkBackground>
  );
};

export default Resume;
