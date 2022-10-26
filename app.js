require("./config/mongo")
const path = require('path');
const { log } = require("console")
const express = require("express");

const hbs = require("express-handlebars");
const { dirname } = require("path");

const app = express()

app.engine("hbs", hbs.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", (req, res) => {
    res.render("secret")
})

app.use("/users", require("./routes/usersRt")) //llamar al roueter

app.listen(8080, err => {
    !err? log(`server running on http://localhost:8080`) : log (`server running on http://localhost:8080`)
})

