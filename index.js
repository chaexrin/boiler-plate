const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://boilerplate:i1J6mouzjxfP9Ych@boiler-plate.z4pzhw3.mongodb.net/?retryWrites=true&w=majority&appName=boiler-plate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Mongo DB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})