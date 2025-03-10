require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connectionString = process.env.MONGO_DB_URL
const mongoose = require('mongoose')
const Course = require('./models/CourseSchema.js')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Un video ma mi gente')
})

mongoose.connect(connectionString).then(
  app.listen(PORT, () => {
    console.log('App listening to port ' + PORT)
  })
)
