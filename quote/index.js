const pkg = require("whatsapp-web.js");
const { Client, GroupChat, LocalAuth } = pkg;
const client = new Client({
    authStrategy: new LocalAuth()
});


client.on("message", message => {
	import(`./events/message.js?cachebuster=${Date.now()}`)
		.then(module => module.default(client, message))
		.catch(e => console.error(`Error in event message:`, e));
});

client.on("qr", qr => {
	import(`./events/qr.js?cachebuster=${Date.now()}`)
		.then(module => module.default(client, qr))
		.catch(e => console.error(`Error in event qr:`, e));
});

client.on("ready", () => {
	import(`./events/ready.js?cachebuster=${Date.now()}`)
		.then(module => module.default(client))
		.catch(e => console.error(`Error in event ready:`, e));
});

client.initialize();