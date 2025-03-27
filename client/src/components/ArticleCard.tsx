import React from 'react';
import { Link } from 'wouter';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-secondary-dark/90 rounded-lg p-6 border border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow">
      <Link href={`/artigos/${article.id}`}>
        <h3 className="text-xl font-bold text-primary mb-2 cursor-pointer hover:underline">{article.title}</h3>
      </Link>
      <p className="text-gray-400 mb-4">
        Publicado em: {article.publishDate} • {article.readTime} min de leitura
      </p>
      <p className="text-gray-300 mb-4">{article.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs rounded bg-primary/20 text-primary">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/artigos/${article.id}`} className="inline-block px-4 py-2 bg-primary text-bg-dark font-medium rounded hover:bg-primary-dark transition-colors">
        Ler artigo
      </Link>
    </div>
  );
};

export default ArticleCard;
