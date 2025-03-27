const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({

    name : {
        type :String,
        default : "user00",
    },

    email : {
        type : String,
    },

    password : {
         type: String,
         require : true,
    }

});

module.exports=mongoose.model("User" , userSchema);