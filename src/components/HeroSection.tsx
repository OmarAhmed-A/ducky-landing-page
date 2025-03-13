import React from 'react';
import { ShoppingCart } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface HeroSectionProps {
  darkMode: boolean;
  setDarkMode: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-700 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-black opacity-10 dark:bg-gray-900 dark:opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Dark mode toggle positioned at the top right */}
        <div className="absolute top-4 right-4 z-20">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white dark:text-gray-200">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Revolutionizing Retail with AIoT Smart Cart
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-gray-300">
              Seamless shopping experience powered by AI and IoT technology
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-80 h-80 bg-stone bg-opacity-10 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-40 h-40 text-white dark:text-gray-200" />
              <div className="absolute inset-0 border-4 border-white border-opacity-20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;