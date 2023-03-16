import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather'
import Login from './Login'


export function App() {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
      </Router>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

