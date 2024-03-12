const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cct-log')
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
					{ name: 'Module 3', value: "m3" },
					{ name: 'Module 4', value: "m4" },
					{ name: 'Private Flight', value: "pf" },
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
		)
		.addAttachmentOption(option =>
			option.setName("proof")
				.setDescription("Training Proof")
				.setRequired(true)
		),

	async execute(interaction, client) {
		if (interaction.channel.id == "1117454698623021097") {
		const file = interaction.options.getAttachment("proof")
		const trainee = interaction.options.getString('trainee')
		const result = interaction.options.getString('result')
		const type = interaction.options.getString('type')
		const e = client.channels.cache.get('1163727201422807141');
		const valuegen = `Trainer: ${interaction.user.tag}\nTraining Type: ${type.toUpperCase()}\nTrainee: ${trainee}\nResult: ${result}`
		const embed = new EmbedBuilder()
			.setColor('Green')
			.setTitle('Training Posted!')
			.setDescription(`Thank you for logging your training, ${interaction.user.tag}! Your Module 3 has been successfully posted. This the information that will be logged:`)
			.addFields({ name: ' ', value: valuegen, inline: false })
			.setFooter({ text: "If there are any mistakes, reply to this message and state the correction so a CCL member can fix it as soon as possible."})
		interaction.reply({ embeds: [embed]})
			
		const trellolink = 'https://api.trello.com/1/boards/4ZYjvFgW/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
		const data = await (await fetch(trellolink)).json()
			
		let listid = data.find(x => interaction.user.tag == x.name)?.id

		if (!listid) listid = (await (await fetch(`https://api.trello.com/1/boards/4ZYjvFgW/lists?name=${interaction.user.tag}&key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, { method: 'POST' })).json()).id
		fetch(`https://api.trello.com/1/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				idList: listid,
    			name: type,
    			desc: valuegen
			})
		})
		return e.send({ content: `${interaction.user.tag} **${type.toUpperCase()} Training Log**`, files: [file]})
	} else return interaction.reply({ content: `Invalid Permissions.`, ephemeral: true})
  	}
}