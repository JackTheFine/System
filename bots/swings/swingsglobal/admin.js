const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin')
    .setDescription('Admin commands.')
    .addStringOption(option =>
      option.setName("command")
        .setDescription("Command to execute.")
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName("id")
        .setDescription("Command id.")
        .setRequired(false)
    )
    .addStringOption(option =>
      option.setName("channel")
        .setDescription("Command Channel.")
        .setRequired(false)
    ),

  async execute(interaction, client) {
    const cmd = interaction.options.getString("command");
    const channel = interaction.options.getString("channel");
    const id = interaction.options.getString("id");
    if (interaction.member.roles.cache.has("1202694736486342726")) {
      switch(cmd) {
        case "delete":
          try {
          client.channels.cache.get(channel).messages.fetch(id).then(message => message.delete())
          } catch (error) {
            return interaction.reply({ content: error, ephemeral: true})
          }
           interaction.reply({ content: "Deleted.", ephemeral: true})
        break;
        default: interaction.reply({ content: "Command not found.", ephemeral: true})
          break;
  
      }
    } else {
      interaction.reply({ content: "Invalid Permissions.", ephemeral: true})
    }
  }
}