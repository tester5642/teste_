import React from 'react';
import NetworkBackground from '../components/NetworkBackground';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

const Resume: React.FC = () => {
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
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold mb-1">Analista de Dados Sênior</h4>
                  <p className="text-primary mb-2">TechDataCorp • 2020 - Presente</p>
                  <p className="text-gray-300 mb-4">Responsável pela implementação de soluções de análise avançada de dados e desenvolvimento de modelos preditivos para o setor de varejo.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Desenvolvimento de dashboards utilizando PowerBI e Tableau</li>
                    <li>Implementação de pipeline de ETL com Apache Airflow</li>
                    <li>Criação de modelos de machine learning para previsão de demanda</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-primary/70 pl-6">
                  <h4 className="text-xl font-bold mb-1">Cientista de Dados</h4>
                  <p className="text-primary/90 mb-2">DataInsights • 2018 - 2020</p>
                  <p className="text-gray-300 mb-4">Atuei no time de ciência de dados aplicando técnicas avançadas de análise para resolver problemas de negócio.</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Análise exploratória de dados para identificação de padrões</li>
                    <li>Desenvolvimento de algoritmos de clustering para segmentação de clientes</li>
                    <li>Implementação de sistemas de recomendação baseados em ML</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">Formação Acadêmica</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-bold mb-1">Mestrado em Ciência de Dados</h4>
                  <p className="text-primary mb-2">Universidade Federal • 2017 - 2019</p>
                  <p className="text-gray-300">Dissertação sobre "Técnicas Avançadas de Machine Learning Aplicadas à Análise Preditiva"</p>
                </div>
                
                <div className="border-l-4 border-primary/70 pl-6">
                  <h4 className="text-xl font-bold mb-1">Bacharelado em Ciência da Computação</h4>
                  <p className="text-primary/90 mb-2">Universidade Estadual • 2013 - 2017</p>
                  <p className="text-gray-300">TCC: "Algoritmos de Aprendizado de Máquina para Processamento de Linguagem Natural"</p>
                </div>
              </div>
            </div>
            
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
        </section>
      </div>
    </NetworkBackground>
  );
};

export default Resume;
