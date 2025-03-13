import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import TechStack from './components/TechStack';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';
import { useLocalStorage } from 'usehooks-ts';
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    console.log('Dark mode changed:', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    console.log('HTML classList:', html.classList);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <HeroSection darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <ProblemSection />
      <FeaturesSection />
      <TechStack />
      <Benefits />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
}

export default App;