import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import { getTickets, createTicket } from './services/index';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getTickets()
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const clickHandler = () => {
    createTicket()
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>{!data ? "Loading..." : (
          <>
            <button onClick={clickHandler}>Create Ticket</button>
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