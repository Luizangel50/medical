var express = require('express');
var router = express.Router();
var path = require('path');
const mongoose = require('mongoose');
const Schedule = require('../models/schedule.js');

// DB configs
const uri = "mongodb+srv://clusterL-A-RW:012345@clusterl-a-cbz84.mongodb.net/medical-core?retryWrites=true";
mongoose.connect(
  uri,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
db.once("open", () => console.log("mongoose connected to the database"));
db.on("error", console.error.bind(console, "mongoose connection error:"));

// Routes
router.get('/api/admin', (req, res) => {
  const collection = Schedule.find({}, function(err, result) {
    if (err) throw err;
    
    console.log(result);
    res.send({ express: result });
  });
});

router.post('/api/schedule', (req, res) => {
  console.log(req.body);
  let data = new Schedule();

  var dateFormat = new Date();
  dateFormat.setDate(dateFormat.getDate());

  data.name = req.body.name;
  data.telephone = req.body.telephone;
  data.email = req.body.email;
  data.begin_date = new Date(`${req.body.date}T${req.body.startTime}-03:00`);
  data.end_date = new Date(`${req.body.date}T${req.body.endTime}-03:00`);

  data.save(err => {
    if (err)     console.log(`Erro`); 

    console.log(`Salvou`);
  });
  res.send(
    `Consulta marcada! \n Confirmando dados:
    Nome: ${req.body.name}, Telefone: ${req.body.telephone}, Email: ${req.body.email}, Dia: ${req.body.date}, Início: ${req.body.startTime}, Fim: ${req.body.endTime}
    `,
  );
});

module.exports = router;