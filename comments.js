// Create web server with express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Load comments data
const comments = require("./comments-data");

// Use body parser to parse JSON data sent via POST
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Create a new comment
app.post("/api/comments", (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Get all comments
app.get("/api/comments", (req, res) => {
  res.json(comments);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
