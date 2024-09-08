const app = require("express")();
var express = require("express")
const path = require("path")

var port = "8080"

app.set("json spaces", 4);
app.use(express.static("public", { extensions: ['html'] }));
console.log("Website starting...");

app.get("/up/", (req, res) => res.json({ site: "Up", uptime: new Date(Math.round(process.uptime()) * 1000).toISOString().slice(11, -5) }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/404.html')));

try {
  app.listen(port);
  console.log(`Website on! Port: ${port}`);
} catch (error) {
  console.error(error)
}

