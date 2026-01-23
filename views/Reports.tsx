
import React from 'react';
import { REPORTS } from '../constants';

const Reports: React.FC = () => {
  // Merging constant reports with the new ones shown in the requirement
  const ALL_REPORTS = [
      ...REPORTS, 
      { id: '3', title: 'Global Supply Chain Resilience Index 2024', period: 'SPECIAL', type: 'RESEARCH' }, 
      { id: '4', title: 'AI Governance Frameworks for Enterprise', period: 'Q2 2024', type: 'GUIDE' }
  ];

  return (
    <div>
        <div className="mb-10 text-center">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Industry Reports</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">Deep dive analyses, white papers, and quarterly market summaries for the data-driven executive.</p>
        </div>

        <div className="grid gap-6">
            {ALL_REPORTS.map(report => (
                <div key={report.id} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-6 w-full md:w-auto">
                        <div className="bg-primary/10 p-4 rounded-xl shrink-0 flex items-center justify-center">
                            {/* Document SVG Icon replacing 'description' text */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 block">{report.period} • {report.type}</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{report.title}</h3>
                            <p className="text-sm text-slate-500 max-w-xl">Comprehensive analysis covering market trends, risk factors, and strategic opportunities for the upcoming fiscal period.</p>
                        </div>
                    </div>
                    <button className="shrink-0 w-full md:w-auto bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary font-bold py-3 px-6 rounded-xl transition-all text-sm whitespace-nowrap">
                        Download PDF
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Reports;
