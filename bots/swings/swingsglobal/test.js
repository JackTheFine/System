const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('add user to ticket'),

  async execute(interaction, client) {
    console.log(interaction)
  }
}