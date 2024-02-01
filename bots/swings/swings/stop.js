const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('stops the bot'),

  async execute(interaction, client) {
    return interaction.reply({ content: 'bye bye world', ephemeral: false })
  }
}