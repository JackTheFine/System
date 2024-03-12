const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ButtonStyle } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('trial-cct')
    .setDescription('Starts a trial cct message in this server.!')
    .addUserOption(option =>
        option.setName("user")
          .setDescription("User to put on trial")
          .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.member.roles.cache.has("1023321861049823344")) {
      const embed = new EmbedBuilder()
    .setAuthor({ name: "Cabin Crew Assistant" })
    .setTitle("Trial Information")
    .setDescription(`
    Congratulations! Your application for Cabin Crew Trainer has been accepted, and your trial has been started by a member of Cabin Crew Leadership.

    **To complete your trial, you will need to:**

    • Host one Module 3 training
    • Host one Private Flight training
    • Carry out one  Module 4 supervision
    
    Your Module 3 & Private Flight trainings will need to be verified by a qualified Cabin Crew Trainer. This can be either you being supervised by a qualified CCT or you may choose to host your training, and record the major parts, and send them in this ticket for a CCT to review. For your M4 supervision, you **do not** need a supervisor or to record.

    You may find all the trainer guides you will need in the <#1023332478456438864> channel as well as all formats you are required to use to send the messages for each training type in the <#1033413759651303605> channel.

    All sessions you host must be logged within ⁠<#1117454698623021097> - including trainees who failed. In the event that you host a training during your trial with a supervisor and no trainees show up, do not cancel the training. Instead, your supervisor will act as a trainee.

    **How to log your training:** Run /cct-log in <#1117454698623021097>. All your sessions **must** be logged after you have finished.

    In addition to the information included within this message, you are also required to familiarize yourself with the pinned messages in <#1038957615855697991>. If you have any questions, please feel free to contact a qualified member of the Cabin Crew Trainer team or Cabin Crew Leadership. If you state an inquiry here, an individual who is able to assist you will respond when possible.

    If you would like to be supervised for a specific training, ping the <@&1023324765676650536> role in this ticket or in ⁠<#1038957615855697991>. State the type of session you want to complete, as well as the time you would like to host at. An available qualified CCT will respond if they can supervise you.


    `)
    .setFooter({ text: "You're all set!" })
    const embed2 = new EmbedBuilder()
    .setAuthor({ name: "Cabin Crew Assistant" })
    .setTitle("<:SPA:1023340062156533840> | Trial Status:")
    .setDescription(`
    Module 3 Training - \`To be hosted\`
    Module 4 Supervision - \`To be Completed\`
    Private flight training - \`To be hosted\`
    `)
    .setFooter({ text: "Last Updated:" })
    .setTimestamp()
    interaction.reply({ content: "Started trial-cct", ephemeral: true})
    const activeuserid = interaction.options.getUser("user").id
    const member = interaction.guild.members.cache.get(activeuserid);
    const msg = await interaction.channel.send({ embeds: [embed, embed2]})
    const m3 = new ButtonBuilder()
			.setCustomId(`m3 ${msg.id} not not not ${activeuserid}`)
			.setLabel('Set M3 Completed')
			.setStyle(ButtonStyle.Danger);

	const m4 = new ButtonBuilder()
			.setCustomId(`m4 ${msg.id} not not not ${activeuserid}`)
			.setLabel('Set M4 Completed')
			.setStyle(ButtonStyle.Danger);
    const pf = new ButtonBuilder()
			.setCustomId(`pf ${msg.id} not not not ${activeuserid}`)
			.setLabel('Set PF Completed')
			.setStyle(ButtonStyle.Danger);
    const finish = new ButtonBuilder()
			.setCustomId(`finish ${msg.id} not not not ${activeuserid}`)
			.setLabel('Finish training')
			.setStyle(ButtonStyle.Danger);
            finish.setDisabled(true);
            const row = new ActionRowBuilder()
			.addComponents(m3, m4, pf, finish);
    msg.edit({ content: `<@${activeuserid}>`, embeds: [embed, embed2], components: [row] })
    member.roles.add(interaction.guild.roles.cache.find(r => r.id === "1194239791978516481"))
    member.roles.add(interaction.guild.roles.cache.find(r => r.id === "1194239791978516481"))
    } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
  }
}