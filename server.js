const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse the body of the request
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="message" placeholder="Write something..." required>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const message = req.body.message;

  // Write the message to a file
  fs.writeFile('message.txt', message, (err) => {
    if (err) throw err;

  });
});

app.listen(port);
