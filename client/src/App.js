import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import './App.css';


function App() {
  const [selected, setSelected] = useState('');
  const location = useLocation();
  
  useEffect(() => {
      if (location.pathname === '/')
        setSelected('client');
      else if (location.pathname === '/admin') 
        setSelected('admin');  
  }, []);

  return (
    <div className="app">
      <nav className="nav-bar">
        <ul>
          <li> 
            <Link to="/" onClick={() => setSelected('client')} className={selected === 'client' ? 'selected' : ''}>Client</Link>
          </li>
          <li>
          <Link to="/admin" onClick={() => setSelected('admin')} className={selected === 'admin' ? 'selected' : ''}>Admin</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;