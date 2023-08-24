const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const db = require('./database');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json()) ; 
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/tickets', async (req, res) => {
  try {
      const response = await db.getTickets();
      res.json({ data: response });
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

app.put('/tickets', async (req, res) => {
  try {
    const response = await db.updateTicket(req.body);
    res.json({ code: response, message: 'Ticket Updated'});
  } catch (err) {
      console.error(err);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
