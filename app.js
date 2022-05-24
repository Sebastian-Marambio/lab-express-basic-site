const express   = require("express");
const app       = express();
const path      = require("path");
const expressLayouts = require("express-ejs-layouts"); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

app.get("/", (req, res, next) => res.render("home"));

app.get("/about", (req, res, next) => res.render("about"));

app.get("/works", (req, res, next) => {
    const works = [
        {title: "Extracting the Stone of Madness (c. 1494-1516)"},
        {title: "The Adoration of the Magi (1494)"},
        {title: "The Seven Deadly Sins (1500)"},
        {title: "The Last Judgment (1505)"},
        {title: "The Garden of Earthly Delights (1510)"},
        {title: "The Haywain Triptych (c. 1515)"}]
        res.render("works", {works})})

app.get("/photos", (req, res, next) => {
    const photos = [{
        title: "Self portrait",
        image: "./images/bosch1.jpg"
        },
        {
        title: "The Garden of Earthly delights",
        image: "./images/bosch2.jpg"
        }
        ,
        {
        title: "Christ Before Pilate",
        image: "./images/bosch3.jpg"
        }
    ]
        res.render("photos", {photos})} )

app.listen(3000);

