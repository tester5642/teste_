import React from 'react';
import { Link } from 'wouter';
import NetworkBackground from '../components/NetworkBackground';
import { ArrowRight, Database, BarChart, LineChart } from 'lucide-react';
import { personalInfo } from '../data/personal-info';
import { skills } from '../data/skills';

const Home: React.FC = () => {
  const { name, title, hero } = personalInfo;
  
  // Agrupa as habilidades por categoria para selecionar as principais
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  // Obter as 3 categorias principais de habilidades
  const topCategories = Object.keys(skillsByCategory).slice(0, 3);
  
  // Mapeamento de ícones para categorias
  const categoryIcons: Record<string, React.ReactNode> = {
    'Bancos de Dados': <Database className="w-12 h-12 mx-auto mb-4 text-primary" />,
    'Visualização': <BarChart className="w-12 h-12 mx-auto mb-4 text-primary" />,
    'Machine Learning': <LineChart className="w-12 h-12 mx-auto mb-4 text-primary" />,
  };
  
  return (
    <NetworkBackground>
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-secondary-dark/80 p-8 rounded-lg border border-primary/20 backdrop-blur-sm max-w-3xl text-center shadow-lg relative overflow-hidden">
          {/* Decorative geometric elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rotate-45 geometric-shape opacity-30 z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 -rotate-12 geometric-shape opacity-30 z-0"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 hero-title">
              {hero?.title || "Olá, eu sou"} 
              <span className="text-primary block mt-2">{name}</span>
            </h1>
            <h2 className="text-2xl text-gray-300 mb-8">{title}</h2>
            
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              {hero?.subtitle || "Transformando dados em insights e soluções para os negócios."}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/projetos">
                <div className="inline-flex items-center px-6 py-3 bg-primary text-bg-dark font-medium rounded-md hover:bg-primary-dark transition-colors cursor-pointer">
                  {hero?.cta || "Ver Projetos"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Link>
              <Link href="/sobre">
                <div className="inline-flex items-center px-6 py-3 border border-primary/50 text-primary font-medium rounded-md hover:bg-primary/10 transition-colors cursor-pointer">
                  Sobre Mim
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          {topCategories.map((category, index) => {
            const categorySkills = skillsByCategory[category];
            const topSkills = categorySkills
              .sort((a, b) => b.level - a.level)
              .slice(0, 4)
              .map(s => s.name)
              .join(', ');
            
            return (
              <div key={index} className="bg-secondary-dark/80 p-6 rounded-lg border border-primary/20 backdrop-blur-sm text-center hover:shadow-primary/10 hover:shadow-lg transition-shadow">
                {categoryIcons[category] || <Database className="w-12 h-12 mx-auto mb-4 text-primary" />}
                <h3 className="text-xl font-bold mb-2">{category}</h3>
                <p className="text-gray-300">{topSkills}</p>
              </div>
            );
          })}
          
          {topCategories.length === 0 && (
            <>
              <div className="bg-secondary-dark/80 p-6 rounded-lg border border-primary/20 backdrop-blur-sm text-center hover:shadow-primary/10 hover:shadow-lg transition-shadow">
                <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Bancos de Dados</h3>
                <p className="text-gray-300">SQL, PostgreSQL, MongoDB, Análise de Dados</p>
              </div>
              
              <div className="bg-secondary-dark/80 p-6 rounded-lg border border-primary/20 backdrop-blur-sm text-center hover:shadow-primary/10 hover:shadow-lg transition-shadow">
                <BarChart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Visualização</h3>
                <p className="text-gray-300">Power BI, Tableau, Matplotlib, D3.js</p>
              </div>
              
              <div className="bg-secondary-dark/80 p-6 rounded-lg border border-primary/20 backdrop-blur-sm text-center hover:shadow-primary/10 hover:shadow-lg transition-shadow">
                <LineChart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-gray-300">Python, TensorFlow, Scikit-learn, Pandas</p>
              </div>
            </>
          )}
        </div>
        
{/* 
  Instruções para personalização:
  1. Edite o arquivo client/src/data/personal-info.ts para atualizar suas informações pessoais e o texto do hero.
  2. Edite o arquivo client/src/data/skills.ts para atualizar suas habilidades, que serão exibidas automaticamente aqui.
*/}
      </section>
    </NetworkBackground>
  );
};

export default Home;
