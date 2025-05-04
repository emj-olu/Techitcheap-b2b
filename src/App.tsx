import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../src/components/Menu';
import LandingPage from '../src/pages/LandingPage';
import ConsultationPage from '../src/pages/Consultation';
import PortfolioPage from '../src/pages/Portfolio';
import ServicesPage from './pages/Services';

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Menu />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;