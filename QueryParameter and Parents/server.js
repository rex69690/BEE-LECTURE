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
app.get("/about" , (request , response)=>{
    const {about} =  request.query;
    response.send("About me : " + about);
})

app.get("/contact" , (request , response)=>{
    const {email , phone } =  request.query;
    response.send("Contact information : "+email + "  " + phone);
})


//lecture 3rd 
let userData = [
    {
        id: 1,
        name: "Tushar",
        address: "Chitkara"
    },
    {
        id: 2,
        name: "Amit",
        address: "Delhi"
    },
    {
        id: 3,
        name: "raj",
        address: "Delhi"
    }
    
    
];

//for one single user
app.get("/info" ,  (request , response)=>{

    const {id} =  request.query;

    for(let i = 0 ; i < userData.length ; i++){
        if(userData[i].id==id){
            response.send(userData[i]);
        }
        
    }
    response.send("not a user")
   


})

//for all users
app.get("/allusers"  , (request , response)=>{
    response.send(userData);
})



//assignment for blog data

const blog = [

{
    id : 1,
    userName : "ram",
    address : "Chd"
}, 
{
    id : 2 ,
    userName : "Sam",
    address : "dlh"
},

{
    id : 3,
    userName : "Rex",
    address : "hp"
}


];

//for all blog data
app.get("/blog/all" , (request , response )=>{
    response.send(blog);
})

//for single blog data

app.get("/blog/single" ,(request , response)=>{
    const {id} = request.query;

    for(let i  = 0 ; i < blog.length ; i++){
        if(blog[i].id==id){
            response.send(blog[i]);
        }
    };

    response.send("Not a user in blog section");
})

//to delete single user
app.get("/delete" , (request , response)=>{
    const {id}  = request.query;
    for(let i  = 0 ; i < blog.length ; i++){
        if(blog[i].id==id){
            blog.splice(i ,1)
            
            response.send({ message: `Blog with id ${id} has been deleted.`, deletedBlog: blog[i] });
            return;
        }
    };

})


app.listen(3100 , () =>{
    console.log(`server running on ${port}`)
})