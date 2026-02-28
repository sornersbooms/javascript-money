
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExtensionDetail from './pages/ExtensionDetail';
import { SalesPopup } from './components/SalesPopup';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/extension/:id" element={<ExtensionDetail />} />
        </Routes>
        <SalesPopup />
      </div>
    </Router>
  );
}

export default App;
