const express = require("express");
const app = express();
const port = 3000;


function setLightColor(color)
{
    console.log("setting color to " + color);
}

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/fonts", express.static(__dirname + "public/fonts"));

app.set("views", "./views");
app.set("view engine", "ejs");


app.get("", (req, res) => {

    res.render("index");



});


app.post("/instant_lighting", function(req, res){
    res.render("index");

    foo("instant_lighting");



});



app.post("/bottom", function(req, res){
    res.render("index");

    foo("bottom");



});


app.listen(port, () => console.info("Listenning on port " + port));