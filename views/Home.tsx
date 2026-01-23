
import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../constants';
import ArticleCard from '../components/ArticleCard';

interface HomeProps {
  onArticleClick: (id: string) => void;
}

const CATEGORIES = ["All", "Logistics", "Finance", "Technology", "Culture", "Strategy"];

const Home: React.FC<HomeProps> = ({ onArticleClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isSaved, setIsSaved] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return ARTICLES;
    return ARTICLES.filter(a => a.category === activeCategory);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div 
              className="h-72 lg:h-auto bg-center bg-cover overflow-hidden" 
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Global Business Cityscape"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">Leadership Insight</span>
                <span className="text-slate-400 text-xs font-semibold">• 10 Min Read</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-6 text-slate-900 dark:text-white">
                Strategic Resilience: Leading Through Global Volatility
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                In an interconnected world facing rapid geopolitical shifts, executive leadership demands a new framework for agility, foresight, and sustainable growth.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <button 
                  onClick={() => onArticleClick('hero')}
                  className="bg-primary hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-primary/30 active:scale-95"
                >
                  Read Full Article
                </button>
                <button 
                  onClick={handleSave}
                  className={`flex items-center gap-2 font-bold py-2 px-4 transition-colors ${isSaved ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}
                >
                  {isSaved ? (
                     // Bookmark Filled Icon
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                     </svg>
                  ) : (
                     // Bookmark Outline Icon (Add)
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                     </svg>
                  )}
                  {isSaved ? 'Saved' : 'Save for later'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 -mx-4 px-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${
                activeCategory === cat 
                ? "bg-primary text-white border-primary shadow-md shadow-primary/20" 
                : "bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Articles Grid */}
        <div className="flex-1 space-y-10">
          <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Latest Insights</h2>
            <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">{filteredArticles.length} Articles</span>
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {filteredArticles.slice(0, visibleCount).map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  onClick={onArticleClick} 
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
               {/* Search Off Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-slate-300 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5 21 3" />
               </svg>
              <p className="text-slate-500 font-bold">No articles found in this category.</p>
            </div>
          )}
          
          {visibleCount < filteredArticles.length && (
            <div className="pt-10 flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="group flex items-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 px-12 py-4 rounded-xl font-black text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:border-primary hover:text-primary shadow-sm active:scale-95"
              >
                Load More
                {/* Chevron Down Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          )}
          {visibleCount >= filteredArticles.length && filteredArticles.length > 0 && (
            <div className="pt-10 text-center text-slate-400 text-sm font-medium">
              You've reached the end of the list.
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[360px] flex flex-col gap-12">
          {/* Newsletter Signup */}
          <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 size-40 bg-primary/20 rounded-full blur-3xl"></div>
            {/* Mark Email Unread Icon (Mail with Dot) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary mb-6 block">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <h3 className="text-2xl font-black mb-4 leading-tight">Executive Briefing</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">Join 50,000+ industry leaders who receive our weekly analysis on market shifts and emerging technology.</p>
            
            {!subscribed ? (
              <form className="space-y-3" onSubmit={handleSubscribe}>
                <div className="relative">
                  <input 
                    className="w-full bg-white/10 border-slate-700 rounded-xl text-sm px-5 py-4 placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                    placeholder="name@company.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-600 text-white font-black py-4 rounded-xl transition-all shadow-lg active:scale-95">
                  Subscribe Now
                </button>
              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
                 {/* Check Circle Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-400 mx-auto mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-white font-bold">Welcome aboard!</p>
                <p className="text-xs text-green-200 mt-1">Check your inbox for the latest report.</p>
              </div>
            )}
            
            <p className="text-[10px] text-slate-500 mt-6 text-center font-bold uppercase tracking-[0.2em]">Zero spam. Unsubscribe anytime.</p>
          </div>

          {/* Trending Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <h3 className="text-lg font-black mb-8 flex items-center gap-3 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
              {/* Trending Up Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
              </svg>
              Trending
            </h3>
            <div className="flex flex-col gap-8">
              {[
                { id: 't1', n: '01', t: 'Quarterly Market Outlook: Mid-Year Review', a: 'Michael Brown', r: '10 min' },
                { id: 't2', n: '02', t: 'Digital Transformation: The Human Element', a: 'Emily Davis', r: '4 min' },
                { id: 't3', n: '03', t: 'Venture Capital Shifts in Q2 2024', a: 'David Clark', r: '7 min' },
                { id: 't4', n: '04', t: 'Retail Tech: The Future of Checkout', a: 'Lisa Wong', r: '5 min' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex gap-5 cursor-pointer" 
                  onClick={() => onArticleClick(item.id)}
                >
                  <span className="text-3xl font-black text-slate-100 dark:text-slate-800 group-hover:text-primary transition-colors">
                    {item.n}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors text-slate-800 dark:text-slate-200">
                      {item.t}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.a}</span>
                      <span className="text-[10px] text-slate-300">•</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.r}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </aside>
      </div>
    </div>
  );
};

export default Home;
