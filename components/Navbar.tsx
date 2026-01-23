
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-[#f0f2f4] dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo Section - Left Side */}
        <a className="flex items-center gap-2 group" href="#/">
          <img 
            src="https://cdn.imgchest.com/files/6d8d3feda1de.png" 
            alt="IndustryInsights Logo" 
            className="h-12 w-auto object-contain"
          />
        </a>
        
        {/* Navigation Section - Moved to Right Side */}
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#/">Articles</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#/reports">Reports</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#/casestudies">Case Studies</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#/about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
