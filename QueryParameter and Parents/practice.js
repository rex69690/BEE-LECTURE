const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



// an array to store user info
let userData = [

{
    id : 1,
    name :  'Raj',
    course : 'cse'
}


];
//to.post all users that exists

app.post("/all" , (request , response)=>{
    response.send(userData);
})


//to search for a user using his id

app.post("/search" , ( request , response)=>{
    const {id} = request.body;
   
    for(let i = 0 ;  i < userData.length ; i++){
        if(userData[i].id ==  id){
            response.send(userData[i]);
        }
    }
})


//now to add a user

app.post("/add" , (request , response)=>{
    const {id , name , course}  = request.body;

 const newUser  = {
    id : parseInt(id),
    name : name,
    course : course
 }

 userData.push(newUser);
 response.send("user has been added successfully");
})


//to delete a user data

app.post("/delete" , (request , response)=>{
    const {id} = request.body;

    //loop
    for(let i = 0 ; i < userData.length ; i++){
        if(userData[i].id == id){
            userData.splice(i , 1);
            response.send(`user ${id}  has been deleted`)
        }
         else {
            response.send("user does not exist")
         }
    }
})







app.listen(3000);