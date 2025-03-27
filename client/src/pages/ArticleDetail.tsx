import React from 'react';
import { useRoute } from 'wouter';
import NetworkBackground from '../components/NetworkBackground';
import { articles } from '../data/articles';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'wouter';

const ArticleDetail: React.FC = () => {
  // Captura o ID do artigo da URL
  const [, params] = useRoute('/artigos/:id');
  const articleId = params?.id;
  
  // Encontra o artigo com o ID correspondente
  const article = articles.find(a => a.id === articleId);
  
  if (!article) {
    return (
      <NetworkBackground>
        <div className="content-overlay min-h-screen">
          <section className="container mx-auto px-4 py-16">
            <div className="bg-secondary-dark/90 rounded-lg p-8 border border-primary/20 shadow-lg">
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Artigo não encontrado</h2>
              <p className="text-gray-300 mb-6">O artigo que você está procurando não existe ou foi removido.</p>
              <Link href="/artigos" className="inline-flex items-center text-primary hover:text-primary/80">
                <ChevronLeft size={16} className="mr-1" />
                Voltar para artigos
              </Link>
            </div>
          </section>
        </div>
      </NetworkBackground>
    );
  }
  
  return (
    <NetworkBackground>
      <div className="content-overlay min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <div className="bg-secondary-dark/90 rounded-lg p-8 border border-primary/20 shadow-lg">
            <div className="mb-6">
              <Link href="/artigos" className="inline-flex items-center text-primary hover:text-primary/80">
                <ChevronLeft size={16} className="mr-1" />
                Voltar para artigos
              </Link>
            </div>
            
            <h1 className="text-4xl font-heading font-bold mb-4 text-primary">{article.title}</h1>
            
            <div className="flex items-center text-gray-400 mb-8">
              <span>{article.publishDate}</span>
              <span className="mx-3">•</span>
              <span>{article.readTime} min de leitura</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-invert prose-primary max-w-none">
              {article.content ? (
                <div className="whitespace-pre-line text-gray-300">
                  {article.content}
                </div>
              ) : (
                <div className="text-gray-400 italic">
                  Conteúdo completo em breve...
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </NetworkBackground>
  );
};

export default ArticleDetail;