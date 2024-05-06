const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('repeats what you said')
    .addStringOption(option =>
      option.setName('tosay')
        .setDescription('what to say')
        .setRequired(true)),

  async execute(interaction, client) {
    const e = client.channels.cache.get('1075839058187657266');
    const ttb = interaction.options.getString('tosay')
    const text = ttb.split(' ').slice().join(' ');
    interaction.channel.send(text)
e.send({content: `${text} -${interaction.member.displayName}`})
    return interaction.reply({ content: 'Message repeated!!', ephemeral: true })

  }
}