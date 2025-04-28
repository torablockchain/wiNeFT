import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import MarketplacePage from './pages/MarketplacePage';

function App() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://embed.tawk.to/your_property_id/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
    })();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
