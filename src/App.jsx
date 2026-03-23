import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import HealthPage from './pages/HealthPage';
import RealEstatePage from './pages/RealEstatePage';
import EducationPage from './pages/EducationPage';
import TechPage from './pages/TechPage';
import InfluencePage from './pages/InfluencePage';
import CarsPage from './pages/CarsPage';
import FinancePage from './pages/FinancePage';
import OthersPage from './pages/OthersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/influence" element={<InfluencePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/others" element={<OthersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
