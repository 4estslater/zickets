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

    await updateTicket(currentTicket)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setTimeout(() => {
          setMessage('');
        }, 2000);
      });

    await getTickets()
      .then((res) => res.json())
      .then((data) => setTickets(data.data));
  }

  const ticketItem = (d,i) => (
    <div key={i} className='ticket-item' onClick={() => handleClick(d)}>
      <p>{new Date(d.updatedAt).toUTCString().slice(-12)}</p>
      <p>{d.userName}</p>
      <p>{d.status.toUpperCase()}</p>
    </div>
  );

  const ticketForm = () => (
    <form onSubmit={handleSubmit}>
      <div>Name: {currentTicket.userName}</div>
      <div>Email: {currentTicket.email}</div>
      <div>Description: {currentTicket.description}</div>
      <div>
        <span>Status: </span>
        <select id="lang" onChange={event => setCurrentTicket({...currentTicket, status: event.target.value})} value={currentTicket.status}>
          <option value="new">New</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      <div>
        <span>Comment: </span>
        <textarea name="comment" onChange={event => setCurrentTicket({...currentTicket, comment: event.target.value})} value={currentTicket.comment} />
      </div>
      <button>Update Ticket</button>
    </form>
  )

  return (  
    <>
      <article className="ticket-edit">
        {!currentTicket ? <p>No Ticket Selected</p>: ticketForm()}
        <p>{message}</p>
      </article>
      <aside className="ticket-list">
        {!tickets || !tickets.length ? <p className='warning'>No Tickets Created</p> : tickets.map((d, i) => ticketItem(d,i))}
      </aside>
    </>
  );
 }
  
  export default Admin;