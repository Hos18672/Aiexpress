import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { LanguageProvider } from './context/LanguageContext';
import LoadingScreen from './components/ui/LoadingScreen';
import './styles/globals.css';
import './utils/i18n';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
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