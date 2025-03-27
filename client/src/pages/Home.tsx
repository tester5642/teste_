import React from 'react';
import { Link } from 'wouter';
import NetworkBackground from '../components/NetworkBackground';
import { ArrowRight, Database, BarChart, LineChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <NetworkBackground>
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-secondary-dark/80 p-8 rounded-lg border border-primary/20 backdrop-blur-sm max-w-3xl text-center shadow-lg relative overflow-hidden">
          {/* Decorative geometric elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rotate-45 geometric-shape opacity-30 z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 -rotate-12 geometric-shape opacity-30 z-0"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 hero-title">Olá, tudo bem?</h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              Seja muito bem-vindo ao meu portfólio! Aqui você poderá encontrar 
              todos os projetos voltados à área de dados em que já trabalhei, além 
              dos assuntos que ando estudando no momento, espero que goste.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/projects">
                <div className="inline-flex items-center px-6 py-3 bg-primary text-bg-dark font-medium rounded-md hover:bg-primary-dark transition-colors cursor-pointer">
                  Ver Projetos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Link>
              <Link href="/about">
                <div className="inline-flex items-center px-6 py-3 border border-primary/50 text-primary font-medium rounded-md hover:bg-primary/10 transition-colors cursor-pointer">
                  Sobre Mim
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
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
        </div>
      </section>
    </NetworkBackground>
  );
};

export default Home;
