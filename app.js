// import express
const express = require("express");
// instantiate the library express
const app = express();

//Weapon-objects
weaponOne = { 
    name: "Morning star",
    priceInUSD: 52.9,
    medieval: true
}

weaponTwo = {
    name: "AK-47",
    priceInUSD: 600,
    medieval: false
}

// route     // callback function
app.get("/", (req, res) => {
    response.send({ message: "This is a page." });
});

app.get("/weapons", (req, res) => {
    res.send(
        { weaponOne, weaponTwo});
});

app.get("/weapons/:id", (req, res) => {
    if (Number(req.params.id) === 1) {
        res.send(weaponOne);
    } if (Number(req.params.id) === 2) {
        res.send(weaponTwo);
    }
    
    else {
        res.send({ errorMessage: "I don't know that weapon" });
    }
});


app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});