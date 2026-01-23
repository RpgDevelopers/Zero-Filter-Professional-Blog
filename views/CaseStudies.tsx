
import React from 'react';

const CaseStudies: React.FC = () => {
    const studies = [
        {
            id: 1,
            company: 'TechCorp Global',
            title: 'Scaling Cloud Infrastructure for 10M+ Users',
            result: '40% Cost Reduction',
            image: 'https://picsum.photos/seed/techcorp/600/400'
        },
        {
            id: 2,
            company: 'FinServe Inc',
            title: 'Automating Compliance with Machine Learning',
            result: 'Zero Audit Failures',
            image: 'https://picsum.photos/seed/finserve/600/400'
        },
        {
            id: 3,
            company: 'EcoLogistics',
            title: 'Sustainable Last-Mile Delivery Networks',
            result: '25% Lower Carbon Footprint',
            image: 'https://picsum.photos/seed/eco/600/400'
        }
    ];

  return (
    <div>
        <div className="mb-8">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Case Studies</h1>
            <p className="text-slate-500">Real-world examples of strategic innovation and operational excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map(study => (
                <div key={study.id} className="group cursor-pointer">
                    <div className="rounded-xl overflow-hidden mb-5 relative aspect-[4/3]">
                         <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all z-10"></div>
                        <img src={study.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={study.company} />
                        <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
                            {study.result}
                        </div>
                    </div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{study.company}</h3>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">{study.title}</h2>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CaseStudies;
