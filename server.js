const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

// create a new endpoint for when the browser makes a `GET` request to http://localhost:3000/musicians.
app.get("/musicians", async (req, res) => {
    // The endpoint will need to fetch these musicians from the database
    const musicians = await Musician.findAll();
    // Send the musicians as a JSON Response
    res.json(musicians);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})