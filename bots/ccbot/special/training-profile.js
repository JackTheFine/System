const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('training-profile')
    .setDescription('Checks your training profile.'),
  async execute(interaction, client) {
    const user = interaction.user.tag
    if (interaction.member.roles.cache.has("1194239791978516481") || interaction.member.roles.cache.has("1023324765676650536")) {
        const trellolink = 'https://api.trello.com/1/boards/4ZYjvFgW/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
        const data = await (await fetch(trellolink)).json()
        let listid = data.find(x => user == x.name)?.id
        if (!listid) return interaction.reply(`Hello ${interaction.user.tag}! You currently have do not have any trainings logged so that means you did not fulfill quota yet.`)
        const trellolink2 = `https://api.trello.com/1/lists/${listid}/cards?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`
        const data2 = await (await fetch(trellolink2)).json()
        var amount = 0;
        var reached = "did not"
        data2.forEach(card => amount++);
        if (amount >= 3) {
            reached = "did"
        }
        return interaction.reply(`Hello ${interaction.user.tag}! You currently have ${amount} training/s so that means you ${reached} fulfill quota.`)
    } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}