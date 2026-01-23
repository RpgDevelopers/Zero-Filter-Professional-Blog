
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import ArticleDetail from './views/ArticleDetail';
import Reports from './views/Reports';
import CaseStudies from './views/CaseStudies';
import About from './views/About';

type ViewState = 'home' | 'article' | 'reports' | 'casestudies' | 'about';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/article/')) {
        setView('article');
        window.scrollTo(0, 0);
      } else if (hash === '#/reports') {
        setView('reports');
        window.scrollTo(0, 0);
      } else if (hash === '#/casestudies') {
        setView('casestudies');
        window.scrollTo(0, 0);
      } else if (hash === '#/about') {
        setView('about');
        window.scrollTo(0, 0);
      } else {
        setView('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToArticle = (id: string) => {
    window.location.hash = `#/article/${id}`;
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home onArticleClick={navigateToArticle} />;
      case 'article':
        return <ArticleDetail />;
      case 'reports':
        return <Reports />;
      case 'casestudies':
        return <CaseStudies />;
      case 'about':
        return <About />;
      default:
        return <Home onArticleClick={navigateToArticle} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 max-w-[1280px] mx-auto px-6 lg:px-10 py-10 w-full">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
