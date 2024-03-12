const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('makelist')
    .setDescription('Creates list for everyone!'),
  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1023321861049823344") || interaction.user.id == "710257546908139649") {
        const trellolink = 'https://api.trello.com/1/boards/4ZYjvFgW/lists?key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1'
		const data = await (await fetch(trellolink)).json()
        const role = interaction.guild.roles.cache.get("1194239791978516481");
        const role2 = interaction.guild.roles.cache.get("1023324765676650536");
        var thing = `s`;
        interaction.guild.members.fetch().then(members => {
             members.each(member => {
                if (member.roles.cache.has(role.id) || member.roles.cache.has(role2.id)) {
			
		            let listid = data.find(x => member.user.tag == x.name)?.name
                    //console.log(listid)
                    if (listid == member.user.tag) {
                        console.log(`Skipped ${member.user.tag} because they had a list already.`)
                    } else {
                    fetch(`https://api.trello.com/1/boards/4ZYjvFgW/lists?name=${member.user.tag}&key=4a90d231a30ce6e3ab41c1046088abb5&token=94087062e584167ccfd2215496b99b019771e54af06cc8d4a05835871f055cc1`, { method: 'POST' })
                    }
                }
            });
        }).catch(console.error);
        interaction.reply({ content: `donme`})
    } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}