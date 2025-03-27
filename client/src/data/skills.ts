export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5 para indicar proficiência (1=básico, 5=especialista)
  iconName?: string;
}

/**
 * HABILIDADES - EDITE AQUI
 * 
 * Adicione, modifique ou remova habilidades conforme necessário.
 * Cada habilidade deve seguir a estrutura do exemplo abaixo.
 * 
 * COMO ADICIONAR UMA NOVA HABILIDADE:
 * 1. Copie um bloco de habilidade existente
 * 2. Cole no final da lista (antes do colchete de fechamento)
 * 3. Altere os dados para sua nova habilidade
 * 4. Adicione uma vírgula após a habilidade anterior
 * 
 * ÍCONES DISPONÍVEIS (da biblioteca Lucide):
 * - Code: Para linguagens de programação
 * - Database: Para bancos de dados
 * - BarChart: Para análise estatística
 * - PieChart: Para visualização de dados
 * - LayoutDashboard: Para ferramentas de BI
 * - Table: Para manipulação de dados
 * - Brain: Para machine learning
 * - Network: Para deep learning/redes neurais
 * - Cloud: Para serviços de cloud
 * - GitBranch: Para versionamento e workflow
 */

export const skills: Skill[] = [
  {
    id: 'python', // EDITE: ID único para a habilidade
    name: 'Python', // EDITE: Nome da habilidade
    category: 'Linguagens de Programação', // EDITE: Categoria da habilidade
    level: 5, // EDITE: Nível de proficiência de 1 a 5
    iconName: 'Code' // EDITE: Nome do ícone (veja a lista acima)
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
  
  // EDITE: Adicione suas novas habilidades aqui!
  // Não esqueça da vírgula após a última habilidade existente
  // {
  //   id: "nova-habilidade",
  //   name: "Nome da Habilidade",
  //   category: "Categoria",
  //   level: 3,
  //   iconName: "Code" // Use qualquer ícone da lista acima
  // }
];