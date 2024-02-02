const { EmbedBuilder } = require('discord.js')
const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('stops the bot'),

  async execute(interaction, client) {
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('General Support')
	.setAuthor({ name: 'Ticket System' })
	.setDescription('Need some help? Click the button so one of our assosiates can assist you!')
	.setFooter({ text: 'StellarWings Assistant'});
	const general = new ButtonBuilder()
	.setCustomId('general')
	.setLabel('General Support')
	.setStyle(ButtonStyle.Success);


const row = new ActionRowBuilder()
	.addComponents(general);
interaction.reply({ content: "Created Embed", ephemeral: true})
interaction.channel.send({ embeds: [exampleEmbed], components: [row] });
  }
}