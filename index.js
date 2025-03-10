const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('Un video ma mi gente')
})

app.listen(PORT, () => {
  console.log('app listening to port ' + PORT)
})
