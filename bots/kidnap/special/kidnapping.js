const { EmbedBuilder } = require('discord.js')
const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kidnapping')
    .setDescription('is there kidnapping happening'),

  async execute(interaction, client) {
    interaction.reply("there is kidnapping happenning")
  }
}