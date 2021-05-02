const express = require("express");
const upload = require("express-fileupload");
const app = express();
const port = 3000;


function setLightColor(color)
{
    console.log("setting color to " + color);
}

app.use(express.static("public"));
app.use(upload());
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/fonts", express.static(__dirname + "public/fonts"));


app.set("views", "./views");

app.set("view engine", "ejs");


app.get("/", (req, res) => {

    res.render("index");



});

app.post("/red", function(req, res){
    res.render("index");

    setLightColor("color");

});


app.post("/instant_lighting", function(req, res){
    res.render("instant_lightning");

    setLightColor("instant_lighting");



});
app.post("/animation", function(req, res){
    res.render("animation");


});


app.post("/Upload", function(req, res){
        res.render("animation");

        if(req.files)
        {
            console.log(req.files);
            var file = req.files.file;
            var filename = file.name;
            console.log(filename);

            file.mv("./upload/"+ filename, function(err){

                if(err)
                {
                    res.send(err);
                }

            });
        }


});


app.listen(port, () => console.info("Listenning on port " + port));