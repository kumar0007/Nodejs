const express = require('express');
const app = express() /// create the express instance 
const myHostName = "localhost"
const port = 5000;

const users = [
    {id:101,name:'amt',age:30},
    {id:102,name:'amt2',age:30},
    {id:103,name:'amt3',age:30}
]

// app.get("/users",(req,res)=>{
//     res.render("users",{users:userslist})
// })

app.get("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id)
    const user = users.find(user=>user.id===userId)
    if(user){
        res.json(user)
    }
    else{
        res.status(404).send('User not found....')
    }
    //res.render("users",{users:userslist})
})

app.post('/users',(req,res)=>{
    const{name,age} = req.body
    const newUser= {
        id:users.length+101,name,age
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

const server = app.listen(port,myHostName,()=>{
    console.log(`server is running on localhost:${port}`)
})

