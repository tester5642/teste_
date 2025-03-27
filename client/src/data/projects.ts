export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  content?: string;
  iconName?: string;
}

/**
 * PROJETOS - EDITE AQUI
 * 
 * Adicione, modifique ou remova projetos conforme necessário.
 * Cada projeto deve seguir a estrutura do exemplo abaixo.
 * 
 * COMO ADICIONAR UM NOVO PROJETO:
 * 1. Copie um bloco de projeto existente
 * 2. Cole no final da lista (antes do colchete de fechamento)
 * 3. Altere os dados para seu novo projeto
 * 4. Adicione uma vírgula após o projeto anterior
 * 
 * ÍCONES DISPONÍVEIS:
 * - LayoutDashboard: Para dashboards e interfaces
 * - BarChart3: Para visualização de dados
 * - LineChart: Para gráficos e análises
 * - ServerCog: Para projetos de infraestrutura
 * - GitBranch: Para desenvolvimento e versionamento
 * - Database: Para projetos de banco de dados
 * - Code: Ícone padrão para outros tipos de projetos
 */

export const projects: Project[] = [
  {
    id: 'ecommerce-analytics', // EDITE: ID único para o projeto (usado na URL)
    title: 'Análise de Dados - E-commerce', // EDITE: Título do projeto
    description: 'Projeto de análise de vendas e comportamento de usuários para uma plataforma de e-commerce.', // EDITE: Descrição curta
    technologies: ['Python', 'Pandas', 'Matplotlib'], // EDITE: Lista de tecnologias usadas
    content: `Conteúdo detalhado do projeto de análise de e-commerce...

Aqui você pode adicionar uma descrição mais detalhada do projeto, 
incluindo seus objetivos, metodologia, resultados e conclusões.

Você também pode:
- Adicionar tópicos em formato de lista
- Descrever os desafios enfrentados
- Explicar as soluções implementadas
- Compartilhar os aprendizados

Este texto será exibido na página de detalhes do projeto.`, // EDITE: Conteúdo detalhado
    iconName: 'BarChart3' // EDITE: Nome do ícone (veja a lista acima)
  },
  {
    id: 'covid-dashboard',
    title: 'Dashboard - COVID-19',
    description: 'Visualização de dados da pandemia com análises temporais e geográficas.',
    technologies: ['Power BI', 'SQL', 'R'],
    content: `Conteúdo detalhado do dashboard de COVID-19...
    
Este projeto apresenta visualizações interativas dos dados da pandemia,
permitindo análises temporais e geográficas para melhor compreensão
da evolução da COVID-19.

Substitua este texto com informações detalhadas sobre seu projeto.`,
    iconName: 'LayoutDashboard'
  },
  {
    id: 'ml-prediction',
    title: 'Machine Learning - Previsão',
    description: 'Modelo preditivo para série temporal de dados financeiros.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    content: `Conteúdo detalhado do projeto de machine learning...
    
Descreva aqui os detalhes do seu modelo de machine learning,
como dados utilizados, algoritmos implementados, métricas de avaliação,
e resultados obtidos.`,
    iconName: 'LineChart'
  },
  {
    id: 'financial-api',
    title: 'API de Dados Financeiros',
    description: 'Serviço de consulta a dados financeiros em tempo real.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    content: `Conteúdo detalhado da API de dados financeiros...
    
Explique aqui a arquitetura da sua API, endpoints disponíveis,
tecnologias utilizadas, desafios de performance, e como você
implementou a segurança.`,
    iconName: 'ServerCog'
  },
  {
    id: 'etl-sales',
    title: 'ETL - Sistema de Vendas',
    description: 'Pipeline de processamento de dados para sistema de vendas.',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL'],
    content: `Conteúdo detalhado do pipeline de ETL...
    
Detalhe aqui o processo de ETL (Extract, Transform, Load) implementado,
incluindo fontes de dados, transformações aplicadas, armazenamento,
e como o pipeline é programado e monitorado.`,
    iconName: 'GitBranch'
  },
  {
    id: 'corporate-bi',
    title: 'BI - Dashboard Corporativo',
    description: 'Visão integrada de KPIs empresariais para tomada de decisões.',
    technologies: ['Tableau', 'SQL Server', 'Excel'],
    content: `Conteúdo detalhado do dashboard corporativo...
    
Descreva os KPIs monitorados, as fontes de dados integradas,
o processo de atualização das informações, e como o dashboard
ajuda na tomada de decisões empresariais.`,
    iconName: 'Database'
  }
  
  // EDITE: Adicione seus novos projetos aqui!
  // Não esqueça da vírgula após o último projeto existente
  // {
  //   id: "seu-novo-projeto",
  //   title: "Seu Novo Projeto",
  //   description: "Descrição do seu projeto",
  //   technologies: ["Tecnologia 1", "Tecnologia 2"],
  //   iconName: "Code", // Use qualquer ícone da lista acima
  //   content: `Detalhes completos sobre seu projeto...`
  // }
];
