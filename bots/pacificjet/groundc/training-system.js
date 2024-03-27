const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('training-system')
		.setDescription('Logs a training.')
		.addStringOption(option =>
			option.setName("trainee")
				.setDescription("The trainee")
				.setRequired(true)
		)
		.addStringOption(option =>
			option.setName("type")
				.setDescription("Training Type")
		  		.setRequired(true)
		  		.addChoices(
					{ name: 'choice 1', value: "1" },
					{ name: 'choice 2', value: "2" },
					{ name: 'choice 3', value: "3" },
		  		)
	  	)
		.addStringOption(option =>
			option.setName("result")
				.setDescription("Training Result")
				.setRequired(true)
				.addChoices(
					{ name: 'Passed', value: "pass" },
					{ name: 'Failed', value: "fail" },
				)
		),

	async execute(interaction, client) {
		//if (interaction.channel.id == "1117454698623021097") {
		const file = interaction.options.getAttachment("proof")
		const trainee = interaction.options.getString('trainee')
		const result = interaction.options.getString('result')
		const type = interaction.options.getString('type')
		const e = client.channels.cache.get('1222376396236783616');
		const valuegen = `Trainer: ${interaction.user.tag}\nTraining Type: ${type.toUpperCase()}\nTrainee: ${trainee}\nResult: ${result}`
		const embed = new EmbedBuilder()
			.setColor('Green')
			.setTitle('Training Posted!')
			.setDescription(`Thank you for logging your training, ${interaction.user.tag}! Your Module 3 has been successfully posted. This the information that will be logged:`)
			.addFields({ name: ' ', value: valuegen, inline: false })
			.setFooter({ text: "PacificJet Assistant"})
		interaction.reply({ embeds: [embed]})
			
		const trellolink = 'https://api.trello.com/1/boards/juysrKKv/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
		const data = await (await fetch(trellolink)).json()
			
		let listid = data.find(x => interaction.user.tag == x.name)?.id

		if (!listid) listid = (await (await fetch(`https://api.trello.com/1/boards/juysrKKv/lists?name=${interaction.user.tag}&key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, { method: 'POST' })).json()).id
		fetch(`https://api.trello.com/1/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				idList: listid,
    			name: type,
    			desc: valuegen
			})
		})
		return //e.send({ content: `${interaction.user.tag} **${type.toUpperCase()} Training Log**`, files: [file]})
	//} else return interaction.reply({ content: `Invalid Permissions.`, ephemeral: true})
  	}
}