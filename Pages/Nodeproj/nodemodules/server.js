//const http = require('http');
//const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // Check if the request is for the root URL
//     if (req.url === '/') {
//         // Read the HTML file
//         fs.readFile('index.html', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Internal Server Error');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

// Get the data with help of Http
// const http = require("node:http");
// const myHostName = "localhost"
// const port = 5000;
// const data = [
//     { productId: 101, productName: 'samsung tv' },
//     { productId: 102, productName: 'lg tv' },
//     { productId: 103, productName: 'oneplus tv' }
// ]
// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/plain")
//         res.end(`This is plain data`)
//     }
//     else if (req.url == '/products') {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write('<h2>This is html data</h2>')
//         res.end()
//     }
//     else if (req.url == '/data') {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.write(JSON.stringify(data))
//         res.end()
//     }
//     else {
//         res.end('Invalid Request')
//     }
// })
// server.listen(port, myHostName, () => {
//     console.log(`server is ruunning on localhost: ${port}`)
// })

// Get the data with express
const express = require('express');
const app = express() /// create the express instance 
const myHostName = "localhost"
const port = 5000;

// define routs
app.get('/',(req,res)=>{
res.send('This is hhome page')
})

app.get('/about',(req,res)=>{
res.send('<h2> This is aboutus page</h2>')
})

app.get('/users', (req, res) => {
    const userdata = [
        {name:'amt1',salary:20000},
        {name:'amt1',salary:20000},
        {name:'amt1',salary:20000}
    ]
    res.send(userdata)
})

const server = app.listen(port, myHostName, () => {
    console.log(`server is ruunning on localhost: ${port}`)
})
