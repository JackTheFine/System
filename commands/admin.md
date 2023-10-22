
const { EmbedBuilder } = require('discord.js');
const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const moment = require('moment')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin')
    .setDescription('Admin Commands')
    .addStringOption(option =>
      option.setName('command')
        .setDescription('Command to run')
        .setRequired(true)
        .addChoices(
          { name: 'utime', value: 'utime' },
          { name: 'rs', value: 'rs' },
        )),
  async execute(interaction, client) {
    const abc = interaction.options.getString("command")
    if (interaction.user.id = "710257546908139649") {
      switch (abc) {
        case "utime":
          require('moment-duration-format')
          const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
          return interaction.reply(duration)
          break;
        case "rs":
          await interaction.reply("Restarting bot...")
          process.exit();
          break;
      }
    }
    else return interaction.reply({ content: "invalid permissions!", ephemeral: true })
  }
}
