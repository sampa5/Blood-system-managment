const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const farmers = [];
const merchants = [];

// Farmer Registration
app.post('/register/farmer', (req, res) => {
  const data = req.body;
  farmers.push(data);
  res.json({ message: 'Farmer registered successfully' });
});

// Merchant Registration
app.post('/register/merchant', (req, res) => {
  const data = req.body;
  merchants.push(data);
  res.json({ message: 'Merchant registered successfully' });
});

// Matching Algorithm
app.post('/match', (req, res) => {
  // Matching algorithm logic here
  // Consider location proximity, vehicle availability, offered price, etc.
  // Return the matched result
  res.json({ message: 'Match successful' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// To run this, you'll need to install Node.js and npm, create a new directory, and then run the following commands:

// bash
// Copy code
// npm init -y
// npm install express body-parser cors
// node your_file_name.js






// CREATE DATABASE IF NOT EXISTS your_mysql_database;

// USE your_mysql_database;

// CREATE TABLE IF NOT EXISTS farmers (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   location VARCHAR(255) NOT NULL,
//   crop_type VARCHAR(255) NOT NULL,
//   quantity INT NOT NULL,
//   delivery_date DATE NOT NULL
// );

// CREATE TABLE IF NOT EXISTS merchants (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   location VARCHAR(255) NOT NULL,
//   crop_types VARCHAR(255) NOT NULL,
//   quantities INT NOT NULL,
//   offered_prices VARCHAR(255) NOT NULL
// );