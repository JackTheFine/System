const app = require("express")();
const app2 = require("express")();
var express = require("express")
const path = require("path")

var port = "8080"
var port2 = "8081"

app.set("json spaces", 4);
app.use(express.static(path.join(__dirname, '/public/'), { extensions: ['html'] }));
console.log("Website starting...");

app.get("/up/", (req, res) => res.json({ site: "Up", uptime: new Date(Math.round(process.uptime()) * 1000).toISOString().slice(11, -5) }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/404.html')));
app2.use(express.static("gman", { extensions: ['html'] }));

try {
  app.listen(port);
  app2.listen(port2);
  console.log(`Website on! Port: ${port}`);
} catch (error) {
  console.error(error)
}

