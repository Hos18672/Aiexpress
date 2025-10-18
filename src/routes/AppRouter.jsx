import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ChatBot from '../components/ui/ChatBot';

const AppRouter = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AppRouter;