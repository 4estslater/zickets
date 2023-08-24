import { useState } from 'react';
import '../App.css';
import { createTicket } from '../services/index';

const UID = 'uid1234';

const Client = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('')

  const resetForm = () => {
    setName('');
    setEmail('');
    setDescription('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      uid: UID,
      userName: name,
      email: email,
      description: description
    }
  
    createTicket(requestBody)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setTimeout(() => {
          setMessage('');
        }, 2000);
        resetForm();
    });
  }
    
  return (
    <article className="client-page">
      <form onSubmit={handleSubmit}>
        <label>New Ticket</label>
        <input name="name" onChange={event => setName(event.target.value)} value={name} placeholder="name" />
        <input name="email" onChange={event => setEmail(event.target.value)} value={email} placeholder="email" />
        <input name="description" onChange={event => setDescription(event.target.value)} value={description} placeholder="description" />
        <button>Submit Ticket</button>
      </form>
      <p>{message}</p>
    </article>
  )
};
  
  export default Client;