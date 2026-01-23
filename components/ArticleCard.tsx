
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: (id: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      className="group flex flex-col gap-4 cursor-pointer" 
      onClick={() => onClick(article.id)}
    >
      <div className="aspect-video w-full rounded-lg overflow-hidden relative bg-gray-200">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all z-10"></div>
        <img 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          src={article.image}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className={`${article.categoryColor} text-xs font-bold uppercase tracking-wider`}>
          {article.category}
        </span>
        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-gray-900 dark:text-white">
          {article.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <img 
            alt={article.author.name} 
            className="size-8 rounded-full border border-gray-100 dark:border-gray-700" 
            src={article.author.avatar}
          />
          <div className="text-xs">
            <p className="font-bold text-gray-900 dark:text-white">{article.author.name}</p>
            <p className="text-gray-400">{article.date} • {article.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
