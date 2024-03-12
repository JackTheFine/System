const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('quota')
    .setDescription('Checks all non-quota training profiles.')
    .addSubcommand(subcommand =>
		subcommand.setName("send")
			.setDescription("Send quota reminder.")
	)
    .addSubcommand(subcommand =>
		subcommand.setName("check")
			.setDescription("Check all quota.")
				.addBooleanOption(option =>
                    option.setName("quota")
                      .setDescription("Only show users who have not met quota")
                      .setRequired(false)
                )
	),
  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1023321861049823344") || interaction.user.id == "710257546908139649") {
        switch(interaction.options._subcommand) {
        case "send":
        var i = 0
        const trellolink = 'https://api.trello.com/1/boards/4ZYjvFgW/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
        const data = await (await fetch(trellolink)).json()
        let longest = data.map(card => card.name.length).sort((a, b) => a - b).at(-1)
        let message = "```";
        message += "Name".padEnd(longest) + " | " + "Cards\n"
        message += "".padEnd(longest, "-") + "--------\n"
        interaction.reply("Generating message... please wait");
        for await (const card of data) {
            const carddata = await (await fetch(`https://api.trello.com/1/lists/${card.id}/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`)).json()
            if (carddata.length >= 3) continue;
            message += `${card.name.padEnd(longest)} | ${carddata.length}\n`;
            user.send("Hello! This is a test of the quota reminder, if you get this message please ping @jackthefine (<@710257546908139649>) in <#1023326139218927616> and tell him you got the dm. Thanks!")
            //(await client.users.cache.find(user => user.username == card.name)?.createDM())?.send("Hello! This is a test of the quota reminder, if you get this message please ping @jackthefine (<@710257546908139649>) in and tell him you got the dm. Thanks!");
        }

        message += "```";
        interaction.editReply({ content: `Sending message to the following people:\n${message}` })
        break;
        case "check": 
        var i = 0
        const trellolink1 = 'https://api.trello.com/1/boards/4ZYjvFgW/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
        const data2 = await (await fetch(trellolink1)).json()
        let longest2 = data2.map(card => card.name.length).sort((a, b) => a - b).at(-1)
        let message2 = "```";
        message2 += "Name".padEnd(longest2) + " | " + "Cards\n"
        message2 += "".padEnd(longest2, "-") + "--------\n"
        interaction.reply("Generating message... please wait");
        for await (const card of data2) {
            const carddata = await (await fetch(`https://api.trello.com/1/lists/${card.id}/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`)).json()
            if (interaction.options.getBoolean('quota') && carddata.length >= 3) continue;
            message2 += `${card.name.padEnd(longest2)} | ${carddata.length}\n`;
        }
        message2 += "```";
        interaction.editReply({ content: message2 })
        break;
    } 
    } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}