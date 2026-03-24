import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CareTeam from './pages/CareTeam';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import './App.css';

const LazyAbout = lazy(() => import('./pages/About'));
const LazyServices = lazy(() => import('./pages/Services'));
const LazyCareTeam = lazy(() => import('./pages/CareTeam'));
const LazyHowItWorks = lazy(() => import('./pages/HowItWorks'));
const LazyContact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/services" element={<LazyServices />} />
              <Route path="/care-team" element={<LazyCareTeam />} />
              <Route path="/how-it-works" element={<LazyHowItWorks />} />
              <Route path="/contact" element={<LazyContact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

