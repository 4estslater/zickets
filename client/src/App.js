import React, { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import './App.css';

import { getTickets } from './services/index';

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getTickets()
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);



  return (
    <div className="app">
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