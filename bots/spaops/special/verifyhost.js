
const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verifyhost')
    .setDescription('Host Verification.')
    .addUserOption(option =>
      option.setName("user")
        .setDescription("User to Verify for Host")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    //if (interaction.member.roles.cache.has("1202803806942007349")) {
const userId = interaction.options.getUser("user").id;
const guild = interaction.guild;
const member = guild.members.cache.get(userId);
const b = new EmbedBuilder()
.setAuthor({ name: `Role System` })
.setTitle(`${interaction.user.tag} Verified ${member.user.tag} for Host.`)
.setFooter({ text: `OPS Assistant`})
if (member) {
    member.roles.add(guild.roles.cache.find(r => r.id === "1105875283589992449"))
    member.roles.add(guild.roles.cache.find(r => r.id === "1105653772727877713"))
    member.roles.add(guild.roles.cache.find(r => r.id === "1105654793533403188"))
    member.roles.add(guild.roles.cache.find(r => r.id === "1105656440212963389"))
    member.roles.add(guild.roles.cache.find(r => r.id === "1105656443803271208"))
      .then(() => interaction.reply({ content: `Host Verification added to ${member.user.tag}`, ephemeral: true}))
      
      .then(client.channels.cache.get("1216412757117763664").send({ embeds: [b] }))
      .catch(error => console.error(error));
} else {
  interaction.reply({ content: "Member Not Found", ephemeral: true})
}
  //} else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}