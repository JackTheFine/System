const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('lookup-profile')
    .setDescription('Checks training quota for a user.')
    .addUserOption(option =>
        option.setName("user")
          .setDescription("User to check")
          .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1023321861049823344")) {
    const user = interaction.options.getUser('user').tag
    const trellolink = 'https://api.trello.com/1/boards/4ZYjvFgW/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
    const data = await (await fetch(trellolink)).json()
    let listid = data.find(x => user == x.name)?.id
    if (!listid) return interaction.reply(`${user} does not have any trainings logged.`)
    const trellolink2 = `https://api.trello.com/1/lists/${listid}/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`
    const data2 = await (await fetch(trellolink2)).json()
    var amount = 0;
    data2.forEach(card => amount++);
    return interaction.reply(`${user} has ${amount} training/s logged.`)
} else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}