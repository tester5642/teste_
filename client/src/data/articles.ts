export interface Article {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  content?: string;
}

/**
 * ARTIGOS - EDITE AQUI
 * 
 * Adicione, modifique ou remova artigos conforme necessário.
 * Cada artigo deve seguir a estrutura do exemplo abaixo.
 * 
 * COMO ADICIONAR UM NOVO ARTIGO:
 * 1. Copie um bloco de artigo existente
 * 2. Cole no final da lista (antes do colchete de fechamento)
 * 3. Altere os dados para seu novo artigo
 * 4. Adicione uma vírgula após o artigo anterior
 */

export const articles: Article[] = [
  {
    id: 'python-data-analysis', // EDITE: ID único para o artigo (usado na URL)
    title: 'Python para Análise de Dados', // EDITE: Título do artigo
    description: 'Como usar Pandas e NumPy eficientemente para análise de grandes conjuntos de dados.', // EDITE: Descrição curta
    publishDate: '15 de Janeiro, 2023', // EDITE: Data de publicação no formato desejado
    readTime: 10, // EDITE: Tempo estimado de leitura em minutos
    tags: ['Python', 'Data Science', 'Tutorial'], // EDITE: Lista de tags relacionadas
    content: `# Python para Análise de Dados

Este é um exemplo de formatação para o conteúdo completo do seu artigo.
Você pode utilizar parágrafos, seções e formatação para tornar seu texto mais legível.

## Por que Python para Análise de Dados?

Python tornou-se uma das linguagens mais populares para análise de dados devido à sua 
simplicidade, legibilidade e ao rico ecossistema de bibliotecas especializadas.

## Bibliotecas Essenciais

- **Pandas**: Para manipulação e análise de dados estruturados
- **NumPy**: Para computação numérica eficiente
- **Matplotlib** e **Seaborn**: Para visualização de dados
- **Scikit-learn**: Para machine learning

## Exemplo Prático

Aqui você pode adicionar exemplos de código, explicações detalhadas,
casos de uso, e muito mais.

---

Substitua este conteúdo pelo texto completo do seu artigo.
Este texto será exibido na página de detalhes do artigo.` // EDITE: Conteúdo completo do artigo
  },
  {
    id: 'sql-vs-nosql',
    title: 'SQL vs NoSQL',
    description: 'Quando usar cada tipo de banco de dados e quais são os casos de uso ideais para cada tecnologia.',
    publishDate: '22 de Março, 2023',
    readTime: 8,
    tags: ['Bancos de Dados', 'SQL', 'NoSQL'],
    content: `# SQL vs NoSQL: Quando usar cada um?

Este artigo compara bancos de dados SQL e NoSQL, explorando seus pontos fortes e fracos.

## Bancos SQL (Relacionais)

Ideais para:
- Dados estruturados com relações bem definidas
- Transações que exigem ACID (Atomicidade, Consistência, Isolamento, Durabilidade)
- Sistemas que precisam de forte consistência

## Bancos NoSQL

Categorias principais:
- Orientados a documentos (MongoDB, CouchDB)
- Chave-valor (Redis, DynamoDB)
- Colunares (Cassandra, HBase)
- Grafos (Neo4j, ArangoDB)

Substitua este conteúdo pelo texto completo do seu artigo.`
  },
  {
    id: 'data-lake-vs-warehouse',
    title: 'Data Lake vs Data Warehouse',
    description: 'Arquiteturas modernas de dados e como escolher a melhor para seu projeto.',
    publishDate: '5 de Maio, 2023',
    readTime: 12,
    tags: ['Big Data', 'Arquitetura', 'Cloud'],
    content: `# Data Lake vs Data Warehouse: Escolhendo a Arquitetura Certa

Este artigo explora as diferenças entre data lakes e data warehouses,
ajudando você a escolher a arquitetura ideal para suas necessidades.

## Data Warehouse: Dados Processados e Estruturados

Um data warehouse tradicional é projetado para:
- Armazenar dados processados e estruturados
- Suportar consultas analíticas complexas
- Oferecer alto desempenho para BI e relatórios

## Data Lake: Flexibilidade e Dados Brutos

Um data lake moderno permite:
- Armazenar dados brutos em seu formato original
- Processar diversos tipos de dados (estruturados, semi-estruturados, não estruturados)
- Suportar processamento em larga escala com tecnologias como Spark

Substitua este conteúdo pelo texto completo do seu artigo.`
  },
  {
    id: 'data-visualization',
    title: 'Visualização Efetiva de Dados',
    description: 'Princípios para criar dashboards persuasivos e impactantes.',
    publishDate: '18 de Julho, 2023',
    readTime: 7,
    tags: ['Visualização', 'UX', 'Dashboard'],
    content: `# Visualização Efetiva de Dados: Princípios e Práticas

Este artigo apresenta princípios fundamentais para criar visualizações
de dados que comunicam informações de forma clara e impactante.

## Princípios Fundamentais

1. **Conheça seu público**: Adapte a complexidade e o tipo de visualização ao seu público-alvo
2. **Escolha o gráfico certo**: Selecione o tipo de visualização mais adequado para seus dados
3. **Elimine ruídos visuais**: Remova elementos desnecessários que distraem da mensagem principal
4. **Use cores com propósito**: Aplique cores para destacar informações importantes, não apenas por estética

## Ferramentas Recomendadas

- Tableau para dashboards corporativos
- Power BI para integração com ecossistema Microsoft
- D3.js para visualizações web personalizadas
- Python (Matplotlib, Plotly) para cientistas de dados

Substitua este conteúdo pelo texto completo do seu artigo.`
  },
  {
    id: 'big-data-production',
    title: 'Big Data em Produção',
    description: 'Desafios e soluções para escalar infraestruturas de dados.',
    publishDate: '10 de Setembro, 2023',
    readTime: 15,
    tags: ['Big Data', 'Escalabilidade', 'Infraestrutura'],
    content: `# Big Data em Produção: Do Desenvolvimento à Escala

Este artigo aborda os desafios de implementar e escalar soluções de big data
em ambientes de produção, com foco em performance, confiabilidade e custos.

## Desafios Comuns

- Processamento em tempo real vs. em lote
- Gerenciamento de recursos computacionais
- Garantia de qualidade de dados
- Monitoramento e observabilidade
- Controle de custos em escala

## Arquiteturas Recomendadas

- Lambda Architecture para balancear velocidade e completude
- Kappa Architecture para simplificar o pipeline de dados
- Databricks Lakehouse para combinar o melhor dos data lakes e data warehouses

## Tecnologias Essenciais

- Apache Kafka para ingestão e streaming
- Apache Spark para processamento distribuído
- Kubernetes para orquestração de containers
- Airflow para orquestração de workflows

Substitua este conteúdo pelo texto completo do seu artigo.`
  }
  
  // EDITE: Adicione seus novos artigos aqui!
  // Não esqueça da vírgula após o último artigo existente
  // {
  //   id: "seu-novo-artigo",
  //   title: "Título do Seu Novo Artigo",
  //   description: "Uma breve descrição do seu artigo",
  //   publishDate: "1 de Janeiro, 2023",
  //   readTime: 5,
  //   tags: ["Tag1", "Tag2", "Tag3"],
  //   content: `# Título do Seu Novo Artigo
  //
  // Conteúdo completo do seu artigo aqui...`
  // }
];
