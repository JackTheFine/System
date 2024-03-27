const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('gconly')
    .setDescription('gc server only cmd'),
  async execute(interaction, client) {
    return interaction.reply(`interaction complete 'gc'`)
  }
}