import React from 'react';
import NetworkBackground from '../components/NetworkBackground';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const Articles: React.FC = () => {
  return (
    <NetworkBackground>
      <div className="content-overlay min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-heading font-bold mb-8 border-b border-primary pb-4 text-primary">Artigos</h2>
          
          <div className="space-y-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </div>
    </NetworkBackground>
  );
};

export default Articles;
