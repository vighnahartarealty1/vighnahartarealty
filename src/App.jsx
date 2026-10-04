import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PropertyModal from './components/PropertyModal';
import CursorGlow from './components/CursorGlow';

// Separate Multi-Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import Mumbai3Page from './pages/Mumbai3Page';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <a className="skip" href="#main-content">Skip to content</a>

        {/* Global Floating Header (hidden when property modal view detail is open) */}
        <Header isHidden={Boolean(selectedProperty)} />

        {/* Multi-Page Routes */}
        <main id="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenModal={setSelectedProperty} />} 
            />
            <Route 
              path="/mumbai-3.0" 
              element={<Mumbai3Page onOpenModal={setSelectedProperty} />} 
            />
            <Route 
              path="/mumbai-3" 
              element={<Mumbai3Page onOpenModal={setSelectedProperty} />} 
            />
            <Route 
              path="/mumbai3" 
              element={<Mumbai3Page onOpenModal={setSelectedProperty} />} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage onOpenModal={setSelectedProperty} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/why-us" 
              element={<WhyUsPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Ambient Interactive Cursor Glow */}
        <CursorGlow />

        {/* Floating Quick WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Global Property Details Modal */}
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      </div>
    </Router>
  );
}
