import React, { useState, useEffect } from 'react';

import { getTickets, updateTicket } from '../services/index';

const Admin = () => {
  const [tickets, setTickets] = useState(null);
  const [currentTicket, setCurrentTicket] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getTickets()
      .then((res) => res.json())
      .then((data) => setTickets(data.data));
  }, []);

  const handleClick = (data) => {
    setCurrentTicket(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateTicket(currentTicket)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        // resetForm();
    });
  }

  const ticketItem = (d,i) => (
    <div key={i} className='ticket-item' onClick={() => handleClick(d)}>
      <p>Name: {d.name}</p>
      <p>Email: {d.email}</p>
      <p>Description{d.description}</p>
    </div>
  );

  const ticketForm = () => (
    <form onSubmit={handleSubmit}>
      <div>{currentTicket.name}</div>
      <div>{currentTicket.email}</div>
      <div>{currentTicket.description}</div>
      <div>
        <select id="lang" onChange={event => setCurrentTicket({...currentTicket, status: event.target.value})} value={currentTicket.status}>
          <option value="new">New</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      <div>
        <input name="comment" onChange={event => setCurrentTicket({...currentTicket, comment: event.target.value})} value={currentTicket.comment} />
      </div>
      <button>Update Ticket</button>
    </form>
  )

  return (  
    <>
      <article>
        {!currentTicket ? "No Ticket Selected" : ticketForm()}
        <p>{message}</p>
      </article>
      <aside className="ticket-list">
        {!tickets ? "Loading..." : tickets.map((d, i) => ticketItem(d,i))}
      </aside>
    </>
  );
 }
  
  export default Admin;