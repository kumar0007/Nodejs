const express = require('express')
const cors = require('cors')
const logger = require('./middleware/logger')
const userRoutes = require('./routes/users')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use('/users',userRoutes)

const port = process.env.port || 7000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})


