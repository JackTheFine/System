const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('makes your own embed')
    .addStringOption(option => option.setName('title').setDescription('Setting title').setRequired(true))
    .addStringOption(option => option.setName('descripton').setDescription('Setting description').setRequired(true))
    .addStringOption(option => option.setName('color').setDescription('Setting Color/Colour').setRequired(true))
    .addStringOption(option => option.setName('footer').setDescription('Setting Footer').setRequired(true))
    .addStringOption(option => option.setName('author').setDescription('Setting author').setRequired(true)),
  async execute(interaction, client) {
    const abcd = interaction.options.getString('author');
    const abcde = interaction.options.getString('title');
    const abcdef = interaction.options.getString('descripton');
    const abcdefg = interaction.options.getString('color');
    const abcdefgh = interaction.options.getString('footer');
    const abc = new EmbedBuilder()
      .setAuthor({ name: `${abcd}` })
      //.setColor(abcdefg)
      .setTitle(`${abcde}`)
      .setDescription(`${abcdef}`)
      .setFooter({ text: `${abcdefgh}` })
      .setTimestamp()
    interaction.reply({ content: 'Sent to channel', ephemeral: true })
    return interaction.channel.send({ embeds: [abc] })
  }
}