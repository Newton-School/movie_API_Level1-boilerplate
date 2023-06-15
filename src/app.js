const fs = require('fs');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());


// GET /movies
app.get('/movies', (req, res) => {
  // Complete the Code
});

module.exports = app;
