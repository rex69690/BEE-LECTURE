const express = require('express');
const app = express();
const port = 3000;

// Middleware 1
const f1 = (req, res, next) => {
    console.log("middleware 1 IS RUNNING");
    next();
};

// Middleware 2
const f2 = (req, res, next) => {
    console.log("middleware 2 is running");
    next();
};

// Middleware 3
const f3 = (req, res, next) => {
    console.log("Middleware 3 is running");
    next();
};

// Middleware 4
const f4 = (req, res, next) => {
    console.log("Middleware 4 is running");
    next();
};

app.use(f1);


app.get('/', (req, res) => {
    res.send("Running get request on /");
    console.log("Home it is");
});
app.use(f2);

app.get('/about', f3, f4, (req, res) => {
    res.send("It is the about section");
    console.log("About it is");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
