const express = require('express');
const fs = require('fs').promises;
 
const app = express();
const port = 5000;
 
// Sample array to send as a JSON response
const dataArray = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];
 
app.get('/data', async (req, res) => {
  try {
    await fs.writeFile('product.json', JSON.stringify(dataArray, null, 2));
    res.json(dataArray);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/read-file', async (req, res) => {
  try {
    // Asynchronously read the data from 'data.json' file
    const data = await fs.readFile('data.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error reading file');
  }
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});