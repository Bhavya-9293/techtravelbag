const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Tech Travel Bag backend is running' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }
  return res.json({ success: true, message: 'Message received. We will get back to you soon!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
