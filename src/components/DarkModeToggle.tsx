import React from 'react';

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer z-200">
      <span className="text-gray-100 dark:text-gray-300">Dark Mode:</span>
      <input
        type="checkbox"
        className="hidden"
        checked={darkMode}
        onChange={handleChange}
      />
      <span className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full shadow-inner">
        <span
          className={`absolute transition-transform duration-300 ease-in-out top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform ${
            darkMode ? 'translate-x-full' : ''
          }`}
        ></span>
      </span>
    </label>
  );
};

export default DarkModeToggle;