const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User =  require('./model/user');
app.use(express.json());

app.post("/users", async(req , res)=>{
    
let {name , email , password} = req.body;  /* >>>> defining to take data from body format */

//creating object for User module
let newUser  = new User({
  name : name , 
  email : email ,
  password: password

})

await newUser.save(); /* >> it will add data to collection  */ 

})


//getiing all users
app.get("/users" , async(req,res)=>{

  let allUsers = User.find();
  res.send(allUsers);

})


mongoose.connect('mongodb://127.0.0.1:27017/g13mdb')
  .then(() => console.log('Connected!'))
 
  .catch((err)=>{
    console.log(err);
  })


const port = 3400;

app.listen(port , (req , res)=>{
    console.log("Server started");
});