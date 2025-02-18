const express = require('express');
const app = express();
const port = 3100;

//middle ware to check authentication
const checkAuth = (req, res, next) => {

    if (req.headers.authorization) {
        console.log(
            "correct authorization"
        )

        next();
    }
    else {
        res.status(401).send("Unauthorized access");
    }
}

app.use(checkAuth);

app.get("/protected", (req, res) => {
    res.send("qWelcome to proetcted route");
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});