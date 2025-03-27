import React from 'react';
import NetworkBackground from '../components/NetworkBackground';

const Resume: React.FC = () => {
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
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white">Técnicas</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Python</span>
                        <span className="text-primary">Avançado</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">SQL</span>
                        <span className="text-primary">Avançado</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Machine Learning</span>
                        <span className="text-primary">Intermediário</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Big Data (Spark)</span>
                        <span className="text-primary">Intermediário</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-white">Ferramentas</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Pandas/NumPy</span>
                        <span className="text-primary">Avançado</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">PowerBI/Tableau</span>
                        <span className="text-primary">Avançado</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">AWS/Azure</span>
                        <span className="text-primary">Intermediário</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Docker/Kubernetes</span>
                        <span className="text-primary">Básico</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '50%'}}></div>
                      </div>
                    </div>
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

export default Resume;
