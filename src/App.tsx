import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Menu from '../src/components/Menu';
import AboutPage from './pages/About';
import ConsultationPage from '../src/pages/Consultation';
import ContactPage from '../src/pages/Contact';
import PortfolioPage from '../src/pages/Portfolio';
import ServicesPage from './pages/Services';
import ServiceDetailPage from '../src/pages/ServicesDetail';
import FAQPage from '../src/pages/FAQ';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh the page.</h1>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="font-montserrat">
            <Menu />
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
              <Route path="/terms" element={<div>Terms of Service Page</div>} />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;