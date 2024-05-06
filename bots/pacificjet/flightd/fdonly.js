const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('fdonly')
    .setDescription('fd server only cmd'),
  async execute(interaction, client) {
    return interaction.reply(`interaction complete 'fd'`)
  }
}