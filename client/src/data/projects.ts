export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  content?: string;
  iconName?: string; // Changed to string
}

export const projects: Project[] = [
  {
    id: 'ecommerce-analytics',
    title: 'Análise de Dados - E-commerce',
    description: 'Projeto de análise de vendas e comportamento de usuários para uma plataforma de e-commerce.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    content: 'Conteúdo detalhado do projeto de análise de e-commerce...',
    iconName: 'BarChart3'
  },
  {
    id: 'covid-dashboard',
    title: 'Dashboard - COVID-19',
    description: 'Visualização de dados da pandemia com análises temporais e geográficas.',
    technologies: ['Power BI', 'SQL', 'R'],
    content: 'Conteúdo detalhado do dashboard de COVID-19...',
    iconName: 'LayoutDashboard'
  },
  {
    id: 'ml-prediction',
    title: 'Machine Learning - Previsão',
    description: 'Modelo preditivo para série temporal de dados financeiros.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    content: 'Conteúdo detalhado do projeto de machine learning...',
    iconName: 'LineChart'
  },
  {
    id: 'financial-api',
    title: 'API de Dados Financeiros',
    description: 'Serviço de consulta a dados financeiros em tempo real.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    content: 'Conteúdo detalhado da API de dados financeiros...',
    iconName: 'ServerCog'
  },
  {
    id: 'etl-sales',
    title: 'ETL - Sistema de Vendas',
    description: 'Pipeline de processamento de dados para sistema de vendas.',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL'],
    content: 'Conteúdo detalhado do pipeline de ETL...',
    iconName: 'GitBranch'
  },
  {
    id: 'corporate-bi',
    title: 'BI - Dashboard Corporativo',
    description: 'Visão integrada de KPIs empresariais para tomada de decisões.',
    technologies: ['Tableau', 'SQL Server', 'Excel'],
    content: 'Conteúdo detalhado do dashboard corporativo...',
    iconName: 'Database'
  }
];
