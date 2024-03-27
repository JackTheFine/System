const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('training-system')
		.setDescription('Training System.')
		.addSubcommand(subcommand =>
			subcommand.setName("log")
				.setDescription("Logs a training")
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
					{ name: 'Safety', value: "safety" },
					{ name: 'Pushback', value: "pb" },
					{ name: 'GPU', value: "gpu" },
					{ name: 'JetWay', value: "jetway" },
					{ name: 'Fuel Truck', value: "fuel" },
					{ name: 'Airstairs', value: "airstairs" },
					{ name: 'Lav Truck', value: "lavatory" },
					{ name: 'Catering Truck', value: "catering" },
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
		))
		.addSubcommand(subcommand =>
			subcommand.setName("profile")
				.setDescription("Checks your training profile.")
		)
		.addSubcommand(subcommand =>
			subcommand.setName("check")
				.setDescription("Checks a users training profile.")
				.addUserOption(option =>
					option.setName("user")
					  .setDescription("User to check")
					  .setRequired(true)
				)
		),

	async execute(interaction, client) {
		switch (interaction.options._subcommand) {
			case "log":
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
			.setDescription(`Thank you for logging your training, ${interaction.user.tag}! Your ${type} training has been successfully posted. This the information that will be logged:`)
			.addFields({ name: ' ', value: valuegen, inline: false })
			.setFooter({ text: "PacificJet Assistant"})
		interaction.reply({ embeds: [embed]})
			
		const trellolink1 = 'https://api.trello.com/1/boards/juysrKKv/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
		const data1 = await (await fetch(trellolink1)).json()
			
		let listid1 = data1.find(x => interaction.user.tag == x.name)?.id

		if (!listid1) listid1 = (await (await fetch(`https://api.trello.com/1/boards/juysrKKv/lists?name=${interaction.user.tag}&key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, { method: 'POST' })).json()).id
		fetch(`https://api.trello.com/1/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				idList: listid1,
    			name: type,
    			desc: valuegen
			})
		})
	break;
	case "profile":
		const user = interaction.user.tag
    //if (interaction.member.roles.cache.has("1194239791978516481") || interaction.member.roles.cache.has("1023324765676650536")) {
        const trellolink = 'https://api.trello.com/1/boards/juysrKKv/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
        const data = await (await fetch(trellolink)).json()
        let listid = data.find(x => user == x.name)?.id
        if (!listid) return interaction.editReply(`Hello ${interaction.user.tag}! You currently have do not have any trainings logged.`)
        const trellolink2 = `https://api.trello.com/1/lists/${listid}/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`
        const data2 = await (await fetch(trellolink2)).json()
        var amount = 0;
        var reached = "did not"
        var yet = " yet."
        var s = ""
        data2.forEach(card => amount++);
        if (amount >= 3) {
            reached = "did"
            yet = "!"
        }
        if (amount >= 2) {
          s = "s"
      }
         interaction.reply(`Hello ${interaction.user.tag}! You currently have ${amount} training${s}.`)
    //} else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
	break;
	case "check":
		//if (interaction.member.roles.cache.has("1023321861049823344")) {
			const user1 = interaction.options.getUser('user').tag
			const trellolink3 = 'https://api.trello.com/1/boards/juysrKKv/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
			const data3 = await (await fetch(trellolink3)).json()
			let listid3 = data3.find(x => user1 == x.name)?.id
			if (!listid3) return interaction.reply(`${user1} does not have any trainings logged.`)
			const trellolink4 = `https://api.trello.com/1/lists/${listid3}/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`
			const data4 = await (await fetch(trellolink4)).json()
			var amount = 0;
			var s = "s"
			data4.forEach(card => amount++);
			if (amount >= 2) {
			  s = "s"
		  }
			 interaction.reply(`${user1} has ${amount} training${s} logged.`)
		//} else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
	break;
		}
  	}
}