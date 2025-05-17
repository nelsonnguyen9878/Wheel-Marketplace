const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const http = require("http")

// 
const app = express()

app.listen(4000, () => {
    console.log('listening on port 4000')
})
