// app.js
const express = require('express');
const app = express();
const path = require('path');
 
// Set EJS as the templating engine
app.set('view engine', 'ejs');
 
// Set the views folder
app.set('views', path.join(__dirname, 'views'));
 
// Serve static files (like CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
 
// Define some dynamic data
const dynamicData = {
    siteName: 'My Node.js Website',
    author: 'Kshitij Ohri',
    message: 'Welcome to the dynamic content powered by EJS!'
};
 
// Employee data
const employees = [
    { id: 1, name: 'Kshitij', sal: 50000, designation: 'Software Engineer', image: '/images/employee1.jpg' },
    { id: 2, name: 'Akashdeep', sal: 60000, designation: 'Manager', image: '/images/employee2.jpg' },
    { id: 3, name: 'Amit', sal: 55000, designation: 'Software Engineer', image: '/images/employee1.jpg' },
];
 
// Home Route
app.get('/', (req, res) => {
    res.render('index', { 
        data: dynamicData,
        title: 'Home Page'  // Pass a title specific to the page
    });
});
 
// About Route
app.get('/about', (req, res) => {
    res.render('about', { 
        data: dynamicData,
        title: 'About Us'  // Pass a title specific to the page
    });
});
 
// Employees Route
app.get('/employees', (req, res) => {
    res.render('employees', { 
        employees: employees,
        data: dynamicData,
        title: 'Employees'
    });
});
 
// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});