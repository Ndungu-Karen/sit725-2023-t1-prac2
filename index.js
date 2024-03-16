const express = require('express');
const app = express();
const port = 3000;

// Endpoint to add two numbers
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  
  // Check if both numbers are provided
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide both numbers' });
  }

  // Parse numbers from query parameters
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  // Check if valid numbers are provided
  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    return res.status(400).json({ error: 'Please provide valid numbers' });
  }

  // Perform addition
  const result = parsedNum1 + parsedNum2;

  // Send result as JSON response
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
