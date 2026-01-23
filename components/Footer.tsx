
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-[#f0f2f4] dark:border-gray-800 py-12 mt-0">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="https://cdn.imgchest.com/files/6d8d3feda1de.png" 
                alt="IndustryInsights Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              The leading source for executive-level perspectives on business, technology, and the future of work.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-gray-900 dark:text-gray-100">Sections</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#/">All Topics</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/reports">Leadership</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/casestudies">Innovation</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/reports">Market Analysis</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-gray-900 dark:text-gray-100">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#/about">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/about">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/about">Contact</a></li>
              <li><a className="hover:text-primary transition-colors" href="#/reports">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-gray-900 dark:text-gray-100">Follow Us</h3>
            <div className="flex gap-4">
              {/* Twitter / X Icon */}
              <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => alert("Redirecting to Twitter...")} aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              {/* Facebook Icon */}
              <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => alert("Redirecting to Facebook...")} aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => alert("Redirecting to LinkedIn...")} aria-label="LinkedIn">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.6.6 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                 </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#f0f2f4] dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 IndustryInsights Media Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary" href="#/about">Privacy Policy</a>
            <a className="hover:text-primary" href="#/about">Terms of Service</a>
            <a className="hover:text-primary" href="#/about">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
