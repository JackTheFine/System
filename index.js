const db = require("./db.js");
db.loadFromFile("./db.json");
const app = require("express")();
var express = require("express")
const path = require("path")
var port = "8080"

app.set("json spaces", 4);

app.use(express.static("public", { extensions: ['html'] }));
//
require("./bots/mybot/index.js")
var myBot = db.get("botOn");
var flyvalle = db.get("botOn1");
var rambambot = db.get("botOn2");
var foxy = db.get("botOn3");
var ftcli = db.get("botOn4");
console.log("Website starting...");
app.get("/up/", (req, res) => res.json({ myBot, flyvalle, rambambot, foxy, site: "Up", uptime: new Date(Math.round(process.uptime()) * 1000).toISOString().slice(11, -5) }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/404.html')));
try {
  app.listen(port);
  console.log(`Website on! Port: ${port} Link: www.jackthefine.dev/`);
} catch (error) {
  console.error(error)
}
