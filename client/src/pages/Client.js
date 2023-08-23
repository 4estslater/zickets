import { useState } from 'react';
import { createTicket } from '../services/index';

const UID = 'uid1234';

const Client = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('')

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
    });
  }
    
  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label>
          <input name="name" onChange={event => setName(event.target.value)} value={name} />
          <input name="email" onChange={event => setEmail(event.target.value)} value={email} />
          <input name="description" onChange={event => setDescription(event.target.value)} value={description} />
        </label>
        <button>Submit Ticket</button>
      </form>
      <p>{message}</p>
    </>
  )
  };
  
  export default Client;