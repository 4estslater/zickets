const path = require('path');
const express = require('express');
const db = require('./database');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/tickets', async (req, res) => {
  const options = {
    id: req.id
  }

  try {
      const result = await db.getTickets(options);
      res.json({ message: `Ticket Count: ${result.length}` });
  } catch (err) {
      console.error(err);
  }
});

app.post('/tickets', async (req, res) => {
  const options = {
    id: req.id
  }

  try {
    const result = await db.createTicket(options);
    res.json({ message: `Ticket Created: ${result.length}` });
  } catch (err) {
      console.error(err);
  }
});

app.put('/tickets', (req, res) => {
  res.json({ message: 'Update Ticket!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
