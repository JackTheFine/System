const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('add user to ticket')
    .addUserOption(option =>
      option.setName("user")
        .setDescription("User to add")
        .setRequired(true)),

  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1202801668656472136")) {
    interaction.reply({ content: "Added to Ticket", ephemeral: true})
    interaction.channel.permissionOverwrites.edit(interaction.options.getUser("user"), {ViewChannel: true })
    console.log(interaction.options.getUser("user"))
    interaction.channel.send({ content: `Added <@${interaction.options.getUser("user").id}> to the ticket.` })
    } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}