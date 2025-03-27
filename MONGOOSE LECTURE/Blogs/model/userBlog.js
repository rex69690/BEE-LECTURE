const mongoose = require('mongoose');

let blogs = new mongoose.Schema({
  title : {
    type : String,
  },

  content : {
    type : String,
  },

  author : {
    type : String,
  }, 

  date : {
    type : String,
  }


})

module.exports=mongoose.model("Blogs" , blogs);