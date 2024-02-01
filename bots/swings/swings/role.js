const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

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
    if (interaction.member.roles.cache.has("1202102337330483271")) {
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
  } else {
    interaction.reply({ content: `Role '${roleName}' not found.`, ephemeral: true})
  }
} else {
  interaction.reply({ content: "Member Not Found", ephemeral: true})
}
  break; 
    }
  }
  }
}