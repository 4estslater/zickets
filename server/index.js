const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const db = require('./database');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json()) ; 
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/tickets', async (req, res) => {
  try {
      const result = await db.getTickets();
      res.send({ message: `Ticket Count: ${result.length}` });
  } catch (err) {
      console.error(err);
  }
});

app.post('/tickets', async (req, res) => {
  try {
    const response = await db.createTicket(req.body);
    res.json({ code: response, message: 'Ticket Created'});
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
