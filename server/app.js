const express = require("express")
const app = express()
const env = require("dotenv/config")
const cors = require("cors")
app.use(cors())
app.use(express.json())
const mongoose = require("mongoose")

app.listen(process.env.PORT || 5000, () => {
    console.log("live")
})

mongoose.connect(process.env.DB, (err) => {
    err ? console.log(err) : console.log("Mongo Live")
})