const express = require('express');
const app = express();
const port = 3100;


// app.get("/profile" , (request , response)=>{
//     const {username ,age} =  request.query;
//     console.log(username);
//     response.send("Profile page of "+ " " + username + "  " + age)
// });


app.get("/profile/:id",(request , response) =>{
    const {id,username} = request.params;
    //find in database
    response.send("profile page of" + " " + id);
})

app.listen(3100 , () =>{
    console.log(`server running on ${port}`)
})