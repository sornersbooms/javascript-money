
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExtensionDetail from './pages/ExtensionDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import { SalesPopup } from './components/SalesPopup';
import TutorialWidget from './components/TutorialWidget';
import { usePageTracking } from './hooks/useAnalytics';

function AnalyticsTracker() {
  usePageTracking();
  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/extension/:id" element={<ExtensionDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
        <SalesPopup />
        <TutorialWidget />
      </div>
    </Router>
  );
}

export default App;
