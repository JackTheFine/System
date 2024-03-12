const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('trial-cht')
    .setDescription('Starts a trial intern and co-host message in this server!')
    .addUserOption(option =>
        option.setName("user")
          .setDescription("User to put on trial")
          .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1105653389410443294")) {
    const embed = new EmbedBuilder()
    .setAuthor({ name: "OPS Assistant" })
    .setTitle("Training Information")
    .setDescription(`
    Congrats on passing your application for **Co-Host And Internship Trainer**!
    --- --- ---

    During your trial you are required to complete:

    > One Module 2 Training
    > One Intern Flight Supervision
    --- --- ---
    If you have any question please contact any member of Operations Leadership and we will help you out as soon as possible.

    Signed,
    <@${interaction.user.id}>
    `)
    .setFooter({ text: "Last Updated:" })
    .setTimestamp()
    const embed2 = new EmbedBuilder()
    .setAuthor({ name: "OPS Assistant" })
    .setTitle("<:SPA:1105865640474050590> | Trial Status:")
    .setDescription(`
    > Module 2 Training - :red_circle:
    > Module 4 Supervision - :red_circle:
    `)
    .setFooter({ text: "Last Updated:" })
    .setTimestamp()
    interaction.reply({ content: "Started trial-cht", ephemeral: true})
    const activeuserid = interaction.options.getUser("user").id
    const member = interaction.guild.members.cache.get(activeuserid);
    const msg = await interaction.channel.send({ embeds: [embed,embed2]})
    const m2 = new ButtonBuilder()
			.setCustomId(`m2 ${msg.id} not not ${activeuserid}`)
			.setLabel('Set M2 Completed')
			.setStyle(ButtonStyle.Danger);
	const supervision = new ButtonBuilder()
			.setCustomId(`supervision ${msg.id} not not ${activeuserid}`)
			.setLabel('Set Supervision Completed')
			.setStyle(ButtonStyle.Danger);
    const finish = new ButtonBuilder()
			.setCustomId(`finish ${msg.id} not not ${activeuserid}`)
			.setLabel('Finish training')
			.setStyle(ButtonStyle.Danger);
            finish.setDisabled(true);
            const row = new ActionRowBuilder()
			.addComponents(m2, supervision, finish);
    msg.edit({ content: `<@${activeuserid}>`, embeds: [embed,embed2], components: [row] })
    member.roles.add(interaction.guild.roles.cache.find(r => r.id === "1190788449062637679"))
    }else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}