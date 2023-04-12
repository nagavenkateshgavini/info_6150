const express = require('express')
const dotenv = require('dotenv').config()
const connectDb = require("./config/dbConnection")
const errorHandler = require("./middleware/errorHandler")
const cors = require('cors')


connectDb()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/user", require("./routes/user"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server started on port: ${port}`)
})