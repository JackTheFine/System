const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remove')
    .setDescription('remove user from ticket')
    .addUserOption(option =>
      option.setName("user")
        .setDescription("User to remove")
        .setRequired(true)),

  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1202801668656472136")) {
    interaction.reply({ content: "Removed from Ticket", ephemeral: true})
    interaction.channel.permissionOverwrites.edit(interaction.options.getUser("user"), {ViewChannel: false })
    console.log(interaction.options.getUser("user"))
    interaction.channel.send({ content: `Removed <@${interaction.options.getUser("user").id}> from the ticket.` })
    } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}