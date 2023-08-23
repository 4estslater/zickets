import React, { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import { getTickets } from './services/index';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTickets()
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>{!data ? "Loading..." : (
          <>
            <div>{data}</div>
          </>
        )}</>
      </header>
      <nav>
        <ul>
          <li> 
            <Link to="/">Client</Link>
          </li>
          <li>
          <Link to="/admin">Admin</Link>
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