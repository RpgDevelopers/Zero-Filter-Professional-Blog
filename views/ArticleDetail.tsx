
import React, { useState } from 'react';
import { REPORTS, WEBINARS, COMMENTS } from '../constants';

const ArticleDetail: React.FC = () => {
  const [comments, setComments] = useState(COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handlePostComment = () => {
    if (!newComment.trim()) return;
    
    const commentObj = {
      id: Date.now().toString(),
      author: 'Guest User',
      avatar: 'https://ui-avatars.com/api/?name=Guest+User&background=random',
      timeAgo: 'Just now',
      content: newComment,
    };
    
    setComments([commentObj, ...comments]);
    setNewComment("");
  };

  const handleJoin = () => {
     if(email) {
         setJoined(true);
         setTimeout(() => setJoined(false), 3000);
         setEmail("");
     }
  };

  const navigateTo = (path: string) => {
      window.location.hash = path;
      window.scrollTo(0, 0);
  };

  return (
    <div className="relative">
      {/* Breadcrumbs */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-gray-400">
        <a href="#/" className="hover:text-primary">Home</a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <a href="#/" className="hover:text-primary">Insights</a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-gray-900 dark:text-white">Article Details</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Main Column */}
        <div className="flex-1">
          {/* Header */}
          <header className="mb-10">
            <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-4 inline-block">
              Strategy
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8">
              The Evolution of Modern Corporate Strategy in 2024
            </h1>
            <div className="flex items-center justify-between py-6 border-y border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <img 
                  src="https://picsum.photos/seed/elena/100/100" 
                  className="size-12 rounded-full border-2 border-gray-100 dark:border-gray-700" 
                  alt="Elena Rodriguez"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Elena Rodriguez</h4>
                  <p className="text-xs text-gray-400 uppercase font-semibold">Senior Strategy Consultant</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-400">
                <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  Oct 24, 2023
                </span>
                <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  8 min read
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl aspect-[21/9]">
            <img 
              src="https://picsum.photos/seed/office/1200/600" 
              className="w-full h-full object-cover" 
              alt="Strategy Office"
            />
          </div>

          {/* Article Body Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <div className="pl-6 border-l-4 border-primary mb-10 italic text-2xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
              "In an era of rapid technological disruption, the traditional 5-year plan is obsolete. 
              Here's how leaders are pivoting to dynamic, data-driven frameworks that emphasize agility over rigid forecasting."
            </div>

            <p className="mb-8 leading-relaxed">
              In today's hyper-connected ecosystem, the static strategic plan is quickly becoming a relic of the past. Business leaders are rapidly pivoting to agile, data-centric frameworks that prioritize adaptability over rigid adherence to long-term forecasts. This shift is driven by unparalleled volatility in global supply chains, rapid technological advancements, and shifting consumer behaviors that demand immediate responsiveness.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6">The Shift to Dynamic Resource Allocation</h2>
            <p className="mb-6 leading-relaxed">
              The most resilient organizations have moved towards a fluid model of capital and talent deployment. Instead of annual budgeting cycles that lock resources into departmental silos, forward-thinking CFOs are adopting quarterly, or even monthly, reallocation reviews. This allows firms to starve failing initiatives quickly and double down on emerging opportunities with speed and precision.
            </p>
            <p className="mb-10 leading-relaxed">
              This dynamic approach requires a cultural shift as much as an operational one. Teams must be comfortable with ambiguity and empowered to make decisions based on real-time data rather than historical precedent.
            </p>

            <figure className="my-12 flex flex-col items-center">
               <div className="bg-[#e2ede8] p-10 rounded-xl w-full flex items-center justify-center border border-gray-100 dark:border-gray-800">
                  <img src="https://picsum.photos/seed/analytics/800/500" className="rounded shadow-2xl max-h-[400px]" alt="Analytics dashboard mockup" />
               </div>
               <figcaption className="mt-4 text-xs italic text-gray-400">Figure 1: Comparison of traditional vs. agile strategic cycles.</figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-6">Leveraging Generative AI in Market Intelligence</h2>
            <p className="mb-6 leading-relaxed">
              Beyond simple automation, Generative AI is reshaping how strategic decisions are made. By synthesizing vast amounts of unstructured market data—from social sentiment to geopolitical news flow—AI tools are providing executives with real-time scenario modeling. This 'digital twin' capability allows leadership teams to stress-test strategies against thousands of potential future states before committing capital.
            </p>
            <p className="mb-10 leading-relaxed">
              The organizations that master this integration of human insight and machine intelligence will define the competitive landscape of the next decade.
            </p>

            {/* Newsletter Inline Box */}
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 my-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stay ahead of the curve</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Join 15,000+ executives getting our weekly strategic insights.</p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                {!joined ? (
                    <>
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 md:w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:ring-1 focus:ring-primary"
                    />
                    <button 
                        onClick={handleJoin}
                        className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2.5 rounded-lg text-sm"
                    >
                        Join
                    </button>
                    </>
                ) : (
                    <span className="text-primary font-bold animate-pulse">Thanks for joining!</span>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-16">
              {['STRATEGY', 'INNOVATION', 'CORPORATE', 'LEADERSHIP'].map(tag => (
                <span 
                    key={tag} 
                    onClick={() => window.location.href="#/"}
                    className="text-[10px] font-black tracking-widest text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related Insights */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-16 mb-16">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Insights</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { c: 'LEADERSHIP', t: 'How Remote Culture Impacts Strategic Execution', i: 'https://picsum.photos/seed/rel1/400/250' },
                    { c: 'TECHNOLOGY', t: 'The ROI of UX in Enterprise Platforms', i: 'https://picsum.photos/seed/rel2/400/250' },
                    { c: 'TRENDS', t: 'Industry Trends to Watch in Q4 2024', i: 'https://picsum.photos/seed/rel3/400/250' }
                  ].map((item, idx) => (
                    <div key={idx} className="group cursor-pointer" onClick={() => navigateTo('#/article/related-' + idx)}>
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                        <img src={item.i} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <span className="text-[10px] font-bold text-primary tracking-widest mb-2 block">{item.c}</span>
                      <h4 className="font-bold text-sm leading-snug group-hover:text-primary text-gray-900 dark:text-white">{item.t}</h4>
                    </div>
                  ))}
               </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-[#f0f2f4] dark:border-gray-800 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Comments</h3>
                <span className="text-gray-400 font-medium text-lg">({comments.length})</span>
              </div>

              <div className="mb-10 flex gap-4">
                <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-gray-400">person</span>
                </div>
                <div className="flex-1">
                  <textarea 
                    className="w-full bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-sm focus:ring-1 focus:ring-primary min-h-[100px] text-gray-900 dark:text-white"
                    placeholder="Add to the conversation..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <button 
                        onClick={handlePostComment}
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all shadow-md"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4">
                    <img src={comment.avatar} className="size-10 rounded-full shrink-0" alt={comment.author} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900 dark:text-white text-sm">{comment.author}</span>
                        <span className="text-xs text-gray-400 font-medium tracking-tight">• {comment.timeAgo}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{comment.content}</p>
                      <button className="flex items-center gap-1.5 text-primary text-xs font-bold hover:underline mb-6">
                        <span className="material-symbols-outlined text-sm">reply</span>
                        Reply
                      </button>

                      {comment.replies?.map(reply => (
                        <div key={reply.id} className="flex gap-4 mt-4 border-l-2 border-gray-100 dark:border-gray-800 pl-4 py-2">
                          <img src={reply.avatar} className="size-8 rounded-full shrink-0" alt={reply.author} />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-gray-900 dark:text-white text-xs">{reply.author}</span>
                              <span className="text-[10px] text-gray-400 font-medium">• {reply.timeAgo}</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">{reply.content}</p>
                            <button className="flex items-center gap-1.5 text-primary text-[10px] font-bold hover:underline">
                              <span className="material-symbols-outlined text-[12px]">reply</span>
                              Reply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Article Sidebar */}
        <aside className="w-full lg:w-[320px] flex flex-col gap-10">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-[#f0f2f4] dark:border-gray-800 p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-8 text-gray-900 dark:text-white uppercase tracking-wider">Latest Reports</h3>
            <div className="flex flex-col gap-8">
              {REPORTS.map(report => (
                <div key={report.id} className="group cursor-pointer" onClick={() => navigateTo('#/reports')}>
                  <span className="text-[10px] font-bold text-primary tracking-widest block mb-1.5">{report.period}</span>
                  <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors leading-snug">
                    {report.title}
                  </h4>
                  <p className="text-[10px] font-black text-gray-400 mt-2 uppercase tracking-widest">{report.type}</p>
                </div>
              ))}
            </div>
            <button 
                onClick={() => navigateTo('#/reports')}
                className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-bold py-3 rounded-xl mt-10 transition-all text-sm"
            >
              Browse All Reports
            </button>
          </div>

          <div className="px-4">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8 border-b pb-4">Upcoming Webinars</h3>
            <div className="space-y-10">
              {WEBINARS.map(webinar => (
                <div key={webinar.id} className="flex gap-4 group cursor-pointer" onClick={() => alert("Registration for this webinar opens soon.")}>
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{webinar.month}</span>
                    <span className="text-2xl font-black text-gray-800 dark:text-white leading-none">{webinar.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors leading-snug">
                      {webinar.title}
                    </h4>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">Digital Insights Series</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Social Sticky Side */}
        <div className="hidden xl:flex flex-col gap-6 sticky top-32 left-0 -ml-20 h-fit text-gray-400">
           <button className="hover:text-primary flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-all" onClick={() => alert("Shared to social media")}>
              <span className="material-symbols-outlined text-xl">share</span>
           </button>
           <button className="hover:text-primary flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-all" onClick={() => alert("Saved to bookmarks")}>
              <span className="material-symbols-outlined text-xl">bookmark</span>
           </button>
           <button className="hover:text-primary flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-all" onClick={() => alert("Sent to email")}>
              <span className="material-symbols-outlined text-xl">mail</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
