export interface Article {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  content?: string;
}

export const articles: Article[] = [
  {
    id: 'python-data-analysis',
    title: 'Python para Análise de Dados',
    description: 'Como usar Pandas e NumPy eficientemente para análise de grandes conjuntos de dados.',
    publishDate: '15 de Janeiro, 2023',
    readTime: 10,
    tags: ['Python', 'Data Science', 'Tutorial'],
    content: 'Conteúdo detalhado do artigo sobre Python para análise de dados...'
  },
  {
    id: 'sql-vs-nosql',
    title: 'SQL vs NoSQL',
    description: 'Quando usar cada tipo de banco de dados e quais são os casos de uso ideais para cada tecnologia.',
    publishDate: '22 de Março, 2023',
    readTime: 8,
    tags: ['Bancos de Dados', 'SQL', 'NoSQL'],
    content: 'Conteúdo detalhado do artigo comparando SQL e NoSQL...'
  },
  {
    id: 'data-lake-vs-warehouse',
    title: 'Data Lake vs Data Warehouse',
    description: 'Arquiteturas modernas de dados e como escolher a melhor para seu projeto.',
    publishDate: '5 de Maio, 2023',
    readTime: 12,
    tags: ['Big Data', 'Arquitetura', 'Cloud'],
    content: 'Conteúdo detalhado do artigo sobre data lakes e data warehouses...'
  },
  {
    id: 'data-visualization',
    title: 'Visualização Efetiva de Dados',
    description: 'Princípios para criar dashboards persuasivos e impactantes.',
    publishDate: '18 de Julho, 2023',
    readTime: 7,
    tags: ['Visualização', 'UX', 'Dashboard'],
    content: 'Conteúdo detalhado do artigo sobre visualização de dados...'
  },
  {
    id: 'big-data-production',
    title: 'Big Data em Produção',
    description: 'Desafios e soluções para escalar infraestruturas de dados.',
    publishDate: '10 de Setembro, 2023',
    readTime: 15,
    tags: ['Big Data', 'Escalabilidade', 'Infraestrutura'],
    content: 'Conteúdo detalhado do artigo sobre big data em produção...'
  }
];
