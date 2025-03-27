const express = require('express')
const app = express()


app.get("/getName" , (req , res) =>{
    const  { name } = req.query;
    //?name=tusahr
    res.send(`Hello , my name is ${name}`);
})


app.get("/getName/:name" , (req , res) =>{
    const  { name } = req.params;
    //http://localhost:4000/getName/upasvi
    res.send(`Hello , my name is ${name}`);
})



app.listen(4000);