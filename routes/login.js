// routes/login.js
const express = require('express');
const router = express.Router();

// This is a basic in-memory "database" for storing user credentials.
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Login route (GET request to show the login form)
router.get('/', (req, res) => {
  res.render('login'); // Assuming you're using a templating engine like EJS or Pug
});

// Login route (POST request to handle form submission)
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the "database"
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    // Authentication successful
    res.send('Login successful');
  } else {
    // Authentication failed
    res.send('Login failed');
  }
});

module.exports = router;
