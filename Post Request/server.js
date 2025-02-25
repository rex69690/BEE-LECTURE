const express = require('express');
const  app = express();
const port  = 3400;
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//array to store form data 
const users = [];

//to get register form
app.get("/adduser" , (req , res)=>{
    res.sendFile(__dirname + "/Register.html");
})


//to send form data
app.post("/adduser" , (req , res)=>{
    const {name , email , password} = req.body;


    console.log(name , email , password);

    users.push({name , email , password});
    res.send(users);

})

//to access stored data of form

app.get("/all" ,(req , res)=>{
    res.send(users);
})


app.listen(port , ()=>{
    console.log(`server running on port https://localhost:${port}`);
})