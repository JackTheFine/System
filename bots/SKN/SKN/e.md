const { EmbedBuilder } = require('discord.js')
const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('stops the bot'),

  async execute(interaction, client) {
    const exampleEmbed = new EmbedBuilder()
	.setColor("#3A3B3C")
	.setTitle('General Support')
	.setAuthor({ name: 'Ticket System' })
	.setDescription('To seek assistance, click the button that says, "General Support" and state your issue upon the ticket opening. Then, one of our Ticket Staff members will be there to assist you shortly! Thank you!')
	.setFooter({ text: 'SKN Productions'});
	const general = new ButtonBuilder()
	.setCustomId('general')
	.setLabel(`❔ General Support`)
	.setStyle(ButtonStyle.Secondary);


const row = new ActionRowBuilder()
	.addComponents(general);
interaction.reply({ content: "Created Embed", ephemeral: true})
interaction.channel.send({ embeds: [exampleEmbed], components: [row] });
  }
}