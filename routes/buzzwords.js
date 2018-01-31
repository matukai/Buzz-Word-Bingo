const express = require('express');
const router = express.Router();
let newScore = 0;
let buzzArray = []

let test = {
  buzzWord: 'Agile',
  points: 100
};
buzzArray.push(test);

router.get('/', function (req, res) {
  res.json({
    buzzWord: buzzArray
  });
});

router.post('/', function (req, res) {
  if (buzzArray.length < 5) {
    buzzArray.push(req.body);
    res.send({
      "success": true
    })
  } else {
    res.send({
      "buzzWords FULL": false
    })
  }
});

router.put('/', function (req, res) {
  const body = req.body;
  let updatedBuzzWord = buzzArray.filter(function (element) {
    return element.buzzWord === body.buzzWord
  }).map((element) => {
    element.points = body.points;
    return element;
  })
  let response;
  if(updatedBuzzWord.length){
    response = true
  } else {
    response = false
  }
  res.json({"success" : response});
});

router.delete('/', function (req, res) {
  const body = req.body;
  let response;
  let ind = buzzArray.findIndex(element => element.buzzWord === body.buzzWord);
  if(ind >= 0){
    buzzArray.splice(ind,1);
    response = true;
  }else{
    response = false;
  }
  res.json({"success" : response});
});


module.exports = router