
const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verifycohost')
    .setDescription('Co-Host Verification.')
    .addUserOption(option =>
      option.setName("user")
        .setDescription("User to Verify for Co-Host")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1105653389410443294")) {
const userId = interaction.options.getUser("user").id;
const guild = interaction.guild;
const member = guild.members.cache.get(userId);
const b = new EmbedBuilder()
.setAuthor({ name: `Role System` })
.setTitle(`${interaction.user.tag} Verified ${member.user.tag} for Co-Host.`)
.setFooter({ text: `OPS Assistant`})
if (member) {
    member.roles.add(guild.roles.cache.find(r => r.id === "1105875283589992449"))
    member.roles.add(guild.roles.cache.find(r => r.id === "1105656447049662546"))
      .then(() => interaction.reply({ content: `Co-Host Verification added to ${member.user.tag}`, ephemeral: true}))
      
      .then(client.channels.cache.get("1105869244446556230").send({ embeds: [b] }))
      .catch(error => console.error(error));
} else {
  interaction.reply({ content: "Member Not Found", ephemeral: true})
}
} else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}