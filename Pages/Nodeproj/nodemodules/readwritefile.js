const fs = require('fs');
//Synchronously
const data = fs.readFileSync('source.txt', 'utf8');
console.log(data);

//Asynchronously
fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

// const fileData = fs.readFile("./source.txt" , "utf-8", (err, data) => {
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(data)
//   }
// })

//Asynchronously: Write the data to another file:
fs.writeFile('destination.txt', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

//Synchronously
//   fs.writeFileSync('destination.txt', data);
// console.log('Data written to file');