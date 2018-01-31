const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/buzzwords');


const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.use('/buzzwords', userRoutes );


app.listen(PORT, (err) => {
  if (err) {throw err}
  console.log(`SERVER UP ON PORT: ${PORT}`);
});

