const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://boilerplate:i1J6mouzjxfP9Ych@boiler-plate.z4pzhw3.mongodb.net/?retryWrites=true&w=majority&appName=boiler-plate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Mongo DB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', async (req,res) => {

  const user = new User(req.body)

  try {
    await user.save();
    return res.status(200).json({success:true})
  } catch (err) {
    return res.json({success:false, err})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})