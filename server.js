
var express = require("express");

var app = express();
var MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect('mongodb://localhost:27017/smithal',
    function(err,_db)  {
        if (err)
            console.log("Erreur de connexion à mongodb");
        else {
            console.log("Yeah! Connected!");
            db = _db;
        }
    }
);

app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));


app.get("/", function(req, res) {
	res.sendFile(__dirname + "/html/index.html");
});
app.get("/sloubi", function(req, res) {
	res.end("<body><p style=\"background-color:red\"> lol ! </p>");
});
app.get("/message", function(req, res) {
	db.collection("messages").find().toArray(function(err, messages){
		res.json({message : messages[0].text});
	})
});

app.listen(4564);

console.log("running...");