import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Topbar from './pages/Topbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<Topbar />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
