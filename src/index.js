import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather'
import Login from './Login'


export function App() {
    const [userName, setUserName] = useState("Guest");
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Login userName = {userName} setUserName = {setUserName}/>} />
            <Route exact path="/weather" element={<Weather userName = {userName} setUserName = {setUserName}/>} />
          </Routes>
      </Router>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

