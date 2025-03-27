export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5 para indicar proficiência
  iconName?: string;
}

export const skills: Skill[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Linguagens de Programação',
    level: 5,
    iconName: 'Code'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Bancos de Dados',
    level: 5,
    iconName: 'Database'
  },
  {
    id: 'r',
    name: 'R',
    category: 'Análise Estatística',
    level: 4,
    iconName: 'BarChart'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'Visualização',
    level: 4,
    iconName: 'PieChart'
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Visualização',
    level: 5,
    iconName: 'LayoutDashboard'
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Bibliotecas',
    level: 5,
    iconName: 'Table'
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'Machine Learning',
    level: 4,
    iconName: 'Brain'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'Machine Learning',
    level: 3,
    iconName: 'Network'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud',
    level: 4,
    iconName: 'Cloud'
  },
  {
    id: 'airflow',
    name: 'Apache Airflow',
    category: 'Engenharia de Dados',
    level: 4,
    iconName: 'GitBranch'
  }
];