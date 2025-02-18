const express = require('express');
const app  = express();
const port = 3200;


//global error handle middleware

const global_error = (err , req , res , next) =>{
    console.error(err.message);
    res.status(500).json ({
        status : "error",
        message:   err.message || "internal errror" 
    });
};

//to trigger error at a route

app.post("/error" , (req , res)=>{
    throw new Error ("Something went wrong!");
})


app.use(global_error);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });