const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin')
    .setDescription('ㅤ')
    .addStringOption(option =>
      option.setName('cmd')
        .setDescription('ㅤ')
        .setRequired(true))
    .addStringOption(option =>
        option.setName('id')
            .setDescription('ㅤ')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('channel')
            .setDescription('ㅤ')
            .setRequired(true)),

  async execute(interaction, client) {
    switch(interaction.options.getString('cmd')) {
        case 'delete':
            client.channels.cache.get(interaction.options.getString("channel")).messages.fetch(interaction.options.getString("id")).then(message => message.delete())
            break;
    }
  }
}