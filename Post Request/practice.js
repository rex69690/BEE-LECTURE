const express = require('express');
const app =  express();
const port = 3000;
app.use(express.urlencoded({extended : true}))

//to store data
const usersData = [];

//to fetch  user form
app.get("/adduser" , (req , res)=>{
    res.sendFile(__dirname+ "/practice_form.html");

})

//to fetch user data
app.post("/adduser" , (req , res)=>{
    const {name , email , password} = req.body;


    console.log(name , email , password);
    usersData.push({name , email , password});
    res.send("User data added succcessfully")

})

//to get all data
app.post("/allUsers" , (req , res)=>{
    res.send(usersData);
})

//starting server
app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})
