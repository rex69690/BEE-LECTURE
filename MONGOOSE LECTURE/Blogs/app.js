const express = require('express');
const app = express();
const port = 3200;
const mongoose = require('mongoose');
const Blogs = require('./model/userBlog');
app.use(express.json());


app.post("/blogs" ,async(req,res)=>{
    let {title, content , author} = req.body;
    let today = new Date();
     let date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;    
    let newBlog = new Blogs({
        title: title,
        content :content,
        author :author,
        date : date
    });
    await newBlog.save();
    
})


//getting all blogs

app.get("/blogs" ,async(req, res)=>{
  let allBlogs =  await Blogs.find();
  res.send(allBlogs);
})

//to find one
app.get("/blogs/:id" , async (req , res)=>{
  const {id} = req.params;
  let data = await Blogs.findById(id);
  res.send(data);
})

//delete request

app.delete("/blogs/:id" , async(req,res)=>{
 let {id} = req.params;
 await Blogs.findByIdAndDelete(id);
 res.send(`User with id ${id} is deleted`)
})

//put request
app.put("/blogs/:id" ,async(req , res)=>{
  let {id} = req.params;
  let blog  = await Blogs.findByIdAndUpdate(id);
  let {title , content , author} = req.body;
  blog.title = title;
  blog.content = content;
  blog.author = author;
  await blog.save();
  res.send(`User with id ${id} is updated`)
})


mongoose.connect('mongodb://127.0.0.1:27017/Blogs')
  .then(() => console.log('Connected!'))
 
  .catch((err)=>{
    console.log(err);
  })

app.listen(port , ()=>{
console.log("server is connected.....")
})