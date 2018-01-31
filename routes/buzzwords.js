const express = require('express');
const router = express.Router();
let newScore = 0;
let buzzArray = [];

let test = {buzzWord: 'Agile', points: 100, heard: false}
buzzArray.push(test);

router.get('/', function (req, res) {
  res.send(buzzArray);
});

router.post('/', function (req, res) {
  if(buzzArray.length < 5){
    buzzArray.push(req.body);
    res.send({
      "success": true
    })
  }else{
    res.send({
      "buzzWords FULL" : false
    })
  }
});

router.put('/', function (req, res) {
  if(buzzArray.includes(req.buzzWord)){
    buzzArray.filter(function (element) {
      element.points = req.body.points;
      res.send({
        "success": true
      })
    })
  }else{
    res.send({
      'your word does not exist' : false
    })
  }
})