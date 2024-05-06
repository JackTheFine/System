const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping2')
    .setDescription('Replies with Pong!'),
  async execute(interaction, client) {
    return interaction.reply(`pong ${client.ws.ping}ms`)
  }
}