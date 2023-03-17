import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather'
import Login from './Login'


export function App() {
    const [userName, setUserName] = useState("Guest");
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login userName = {userName} setUserName = {setUserName}/>} />
            <Route path="/weather" element={<Weather userName = {userName} setUserName = {setUserName}/>} />
          </Routes>
      </Router>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

