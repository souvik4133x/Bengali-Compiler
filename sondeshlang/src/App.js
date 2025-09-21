import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import EditorPage from './pages/EditorPage';
import DocsPage from './pages/DocsPage'; // Create this component later
import './styles/Global.css';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
        <FooterNav/>
      </div>
    </Router>
  );
}

export default App;