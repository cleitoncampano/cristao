import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Format from './pages/Format';
import Participate from './pages/Participate';
import Supporters from './pages/Supporters';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <div key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formato" element={<Format />} />
            <Route path="/participe" element={<Participate />} />
            <Route path="/apoiadores" element={<Supporters />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
