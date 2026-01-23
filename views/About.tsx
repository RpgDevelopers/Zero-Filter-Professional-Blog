
import React from 'react';

const About: React.FC = () => {
  const TEAM = [
    {
      name: "Eleanor Pera",
      role: "Senior Analyst",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Marcus Chen",
      role: "Lead Economist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Sarah Johnson",
      role: "Tech Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Empowering Leaders with <span className="text-primary">Clarity</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed">
                IndustryInsights is the premier digital publication for executives, strategists, and forward-thinkers. We decode complex market signals into actionable intelligence.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    In a world of information overload, clarity is the ultimate competitive advantage. Our mission is to filter the noise and provide deep, rigorous analysis that helps leaders make confident decisions.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    From supply chain volatility to AI governance, we cover the critical intersections of business, technology, and society.
                </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                        <span className="block text-4xl font-black text-primary mb-1">50k+</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Subscribers</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-black text-primary mb-1">120+</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Expert Contributors</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-black text-primary mb-1">15</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Industries Covered</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-black text-primary mb-1">Weekly</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Intelligence Reports</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">Meet the Editorial Board</h3>
            <div className="flex flex-wrap justify-center gap-12">
                {TEAM.map((member, i) => (
                    <div key={i} className="flex flex-col items-center group">
                        <div className="relative mb-4">
                           <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <img 
                              src={member.image} 
                              className="size-32 rounded-full object-cover border-4 border-slate-100 dark:border-slate-800 shadow-xl relative z-10" 
                              alt={member.name} 
                            />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{member.name}</h4>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default About;
