import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { LanguageProvider } from './context/LanguageContext';
import SimplifiedLoadingScreen from './components/ui/SimplifiedLoadingScreen';
import './styles/globals.css';
import './utils/i18n';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce loading time for better perceived performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SimplifiedLoadingScreen />;
  }

  return (
    <Router>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </Router>
  );
}

export default App;