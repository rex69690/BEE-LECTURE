const express = require('express');
const app = express();
const path = require('path');
const port = 3000;



app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('layout'); 
  });
  

app.listen(3000 ,() =>{

    console.log(`server running on ${port}.....http://localhost:3000`);

});