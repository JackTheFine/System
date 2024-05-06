const app = require("express")();
const app1 = require("express")();
var express = require("express")
var express1 = require("express")
const path = require("path")
var port = "8080"
var port1 = "8081"

app.set("json spaces", 4);

app.use(express.static("public", { extensions: ['html'] }));
app1.use(express.static("2048", { extensions: ['html'] }));

require("./bots/mybot/index.js")
console.log("Website starting...");
app.get("/up/", (req, res) => res.json({ site: "Up", uptime: new Date(Math.round(process.uptime()) * 1000).toISOString().slice(11, -5) }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/down.html')));


try {
  app.listen(port);
  app1.listen(port1);
  console.log(`Website on! Port: ${port}`);
  console.log(`L freshies on Port: ${port1}`);
} catch (error) {
  console.error(error)
}
