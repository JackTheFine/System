
const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role')
    .setDescription('Role System')
    .addSubcommand(subcommand =>
      subcommand.setName("add")
        .setDescription("Add Role")
        .addUserOption(option =>
          option.setName("user")
            .setDescription("User to Role")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("role")
            .setDescription("Role Name (case sensitive)")
            .setRequired(true)
        )
        )
    .addSubcommand(subcommand =>
      subcommand.setName("remove")
        .setDescription("Remove Role")
        .addUserOption(option =>
          option.setName("user")
            .setDescription("User to Role")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("role")
            .setDescription("Role Name (case sensitive)")
            .setRequired(true)
        )
        ),

  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1202803806942007349") && interaction.guild.id == "1199282865226133554" || interaction.member.roles.cache.has("1203053337017192498") && interaction.guild.id == "1199291170728194088" || interaction.member.roles.cache.has("1203066073029550161") && interaction.guild.id == "1200804330412978287" ) {
const userAt = interaction.options.getUser("user");
const userId = userAt.id;
const roleName = interaction.options.getString("role");
const guild = interaction.guild;
const member = guild.members.cache.get(userId);
  switch(interaction.options._subcommand) {
    case "add":

if (member) {
  // Find the role by name
  const role = guild.roles.cache.find(r => r.name === roleName);

  if (role) {
    // Add the role to the member
    member.roles.add(role)
      .then(() => interaction.reply({ content: `Role ${role.name} added to ${member.user.tag}`, ephemeral: true}))
      .catch(error => console.error(error));
      const b = new EmbedBuilder()
            .setAuthor({ name: `Role System` })
            .setTitle(`${interaction.user.tag} added ${role.name} to ${member.user.tag}.`)
            .setFooter({ text: `StellarWings Assistant | ${guild.name}` })
          client.channels.cache.get("1203054917233680425").send({ embeds: [b] })
  } else {
    interaction.reply({ content: `Role '${roleName}' not found.`, ephemeral: true})
  }
} else {
  interaction.reply({ content: "Member Not Found", ephemeral: true})
}
break;
case "remove":

if (member) {
  // Find the role by name
  const role = guild.roles.cache.find(r => r.name === roleName);

  if (role) {
    // Add the role to the member
    member.roles.remove(role)
      .then(() => interaction.reply({ content: `Role ${role.name} removed from ${member.user.tag}`, ephemeral: true}))
      .catch(error => console.error(error));
      const b = new EmbedBuilder()
            .setAuthor({ name: `Role System` })
            .setTitle(`${interaction.user.tag} removed ${role.name} from ${member.user.tag}.`)
            .setFooter({ text: `StellarWings Assistant | ${guild.name}` })
          client.channels.cache.get("1203054917233680425").send({ embeds: [b] })
  } else {
    interaction.reply({ content: `Role '${roleName}' not found.`, ephemeral: true})
  }
} else {
  interaction.reply({ content: "Member Not Found", ephemeral: true})
}
  break; 
    }
  } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}