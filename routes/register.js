const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('register');
  });
  
  // Registration route (POST request to handle form submission)
  router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    // Check if the username is already in use
    const existingUser = users.find((user) => user.username === username);
  
    if (existingUser) {
      return res.send('Username already in use');
    }
  
    // Register the new user
    users.push({ username, password });
    res.send('Registration successful');
  });

  module.exports = router;