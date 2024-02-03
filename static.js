const db = require("./db.js");
db.loadFromFile("./db.json");
const app = require("express")();
const app1 = require("express")();
var express = require("express")
var express1 = require("express")
const path = require("path")
const { robloxcookie } = require('./config.json');
var groupId = 33763450
var cookie = robloxcookie

const rbx = require("noblox.js");
var port = "8080"
var port1 = "8081"

app.set("json spaces", 4);

app.use(express.static("public", { extensions: ['html'] }));
app1.use(express.static("2048", { extensions: ['html'] }));
var myBot = db.get("botOn");
var flyvalle = db.get("botOn1");
var rambambot = db.get("botOn2");
var foxy = db.get("botOn3");
var ftcli = db.get("botOn4");
console.log("Website starting...");
app.get("/up/", (req, res) => res.json({ myBot, flyvalle, rambambot, foxy, site: "Up", uptime: new Date(Math.round(process.uptime()) * 1000).toISOString().slice(11, -5) }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/down.html')));
async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});


try {
  app.listen(port);
  app1.listen(port1);
  console.log(`Website on! Port: ${port}`);
  console.log(`L freshies on Port: ${port1}`);
} catch (error) {
  console.error(error)
}

