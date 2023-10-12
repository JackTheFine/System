const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reply')
    .setDescription('have the bot reply')
    .addStringOption(option =>
      option.setName('channel')
        .setDescription('channel id')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('id')
        .setDescription('message id')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('text')
        .setDescription('message text')
        .setRequired(true))
    .addAttachmentOption(option =>
      option.setName('file')
        .setDescription('message file')
        .setRequired(false)),
    async execute(interaction, client) {
      const e = client.channels.cache.get('1075839058187657266');
      interaction.reply({ content: "replied", ephemeral: true })
if (interaction.options.getAttachment("file") == null) {
client.channels.cache.get(interaction.options.getString("channel")).messages.fetch(interaction.options.getString("id")).then(message => message.reply({ content: interaction.options.getString("text") }))
e.send({content: `Reply Requested by ${interaction.member.displayName} ID: ${interaction.options.getString("id")} CHANNEL: ${interaction.options.getString("channel")} TEXT: ${interaction.options.getString("text")}`})
} else {
client.channels.cache.get(interaction.options.getString("channel")).messages.fetch(interaction.options.getString("id")).then(message => message.reply({ content: interaction.options.getString("text"), files: [interaction.options.getAttachment("file")] }))
e.send({content: `Reply Requested by ${interaction.member.displayName} ID: ${interaction.options.getString("id")} CHANNEL: ${interaction.options.getString("channel")} TEXT: ${interaction.options.getString("text")} ATTACHMENTS: ${interaction.options.getAttachment("file")}`})
}
}
}