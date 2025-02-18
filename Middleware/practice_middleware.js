const express = require('express');
const app = express();
const port = 3000;

//middleware 
const m1 = (req, res, next) => {
    console.log(`${req.method} request to ${req.url} `);
    next();
};

app.use(m1);

app.post("/home" , (req , res ) => {
    res.send("Welcome to Home page");

});

app.listen(port  , () =>{
 console.log(`server running on https://localhost:${port}`);
})

