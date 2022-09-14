const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser');
const userDataController = require('./app/controllers/userData.controller');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Upskilling',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/userData", (req, res) => {
  console.log("in server.js");
  // console.log(JSON.stringify(req.body))
  // res.send(200);
  var data = req.body;
  userDataController.create(data, function (err, data) {
    if (err) res.json(err);
    else res.send('Successfully inserted!');
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})