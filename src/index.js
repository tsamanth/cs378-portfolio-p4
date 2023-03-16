import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather'
import Login from './Login'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNGUYIH3_z-8-NASRph8w4CYTjsBySIWQ",
  authDomain: "cs378-portfolio-p4.firebaseapp.com",
  projectId: "cs378-portfolio-p4",
  storageBucket: "cs378-portfolio-p4.appspot.com",
  messagingSenderId: "323607418842",
  appId: "1:323607418842:web:a2e83956fbae09856ed2e3"
};

const app = initializeApp(firebaseConfig);

export function App() {
    console.log(app);
    console.log("here")
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

