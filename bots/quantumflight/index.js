const trellolink = "https://api.trello.com/1/lists/621fff818ba72d167224afc7/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1"
const webhooklink = "https://discord.com/api/webhooks/1208585079555883018/mT2kPLF9t2dYwOeLnqVjnNvWuKIKVX4xk7eyoL0B-M1Rd4ekGZCUsLhwXTKMhkmvOxjg"
const editmsg = "1208586242044993576"
const fetch = require("node-fetch");
const { WebhookClient } = require("discord.js");

setInterval(async () => {
	const data = await (await fetch(trellolink)).json(),
		webhookClient = new WebhookClient({ url: webhooklink });
	let content = ``;
	data.forEach(list => content += list.desc + "\n\n");
  if (content == '') {content = `No flights.`}
	webhookClient.editMessage(editmsg, { content, username: "Quantum Assistant", avatarURL: 'https://cdn.discordapp.com/icons/1202491201312522280/db561b3461244b544905754f02be9aef.webp?size=240'});
}, 60000);