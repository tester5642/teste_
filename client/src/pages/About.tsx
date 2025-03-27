import React from 'react';
import NetworkBackground from '../components/NetworkBackground';
import { User, Linkedin, Github, Twitter } from 'lucide-react';

const About: React.FC = () => {
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
                <h3 className="text-2xl font-bold mb-4 text-primary">Matheus Nascimento</h3>
                <h4 className="text-xl text-gray-300 mb-6">Analista e Cientista de Dados</h4>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Sou um profissional apaixonado por dados e tecnologia, com mais de 5 anos de experiência 
                    na implementação de soluções de dados que transformam informações em insights acionáveis.
                  </p>
                  <p>
                    Minha jornada na área de dados começou durante minha graduação em Ciência da Computação, 
                    onde descobri o poder da análise de dados para resolver problemas complexos. Desde então, 
                    venho me especializando em técnicas avançadas de análise, visualização e machine learning.
                  </p>
                  <p>
                    Atualmente, trabalho como Analista de Dados Sênior, onde lidero projetos que envolvem 
                    desde a extração e transformação de dados até a implementação de modelos preditivos 
                    que ajudam a empresa a tomar decisões baseadas em dados.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-primary">Conecte-se comigo</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <Linkedin className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <Github className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <Twitter className="h-8 w-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NetworkBackground>
  );
};

export default About;
