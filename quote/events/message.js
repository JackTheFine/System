const pkg = require("discord.js");
const { WebhookClient } = pkg;

const dotenv = require("dotenv");
dotenv.config();
const {qwotetoken, qwoteid} = require("../../config.json");

const webhook = new WebhookClient({
	id: "1165496942135087124",
	token: "2Sf-QohDCfssIlw52TU7urZ_OaSRa38E46fA0HuRJvrhJZlodT2mMsvtfLEpX7DBVF4b"
});

module.exports = async function(client, message) {
	if (message.id.remote == "120363073213956365@g.us") {
		const sender = await message.getContact();
		const media = await message.downloadMedia();		

		webhook.send({
			content: message.body,
			username: `${sender.pushname}`,
			avatarURL: (await sender.getProfilePicUrl()) || "https://cdn.imaperson.dev/whatsapp-default.png",
			files: media ? [ new Buffer.from(media.data, "base64") ] : []
		});
	}
}