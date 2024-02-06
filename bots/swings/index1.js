const db = require("../../db.js");
db.loadFromFile("./db.json");
const { Client, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, Collection, EmbedBuilder, ActivityType } = require('discord.js');
const fs = require('node:fs');
const { createTranscript } = require('discord-html-transcripts')
const discord = require("discord.js")
const { ButtonStyle } = require("discord.js")
const { token5 } = require('../../config.json');
require("./deploy-commands1")

const client1 = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers] });

client1.commandsb = new Collection();
const commandbFiles = fs.readdirSync('./bots/swings/swings').filter(file => file.endsWith('.js'));

for (const file of commandbFiles) {
  const commandb = require(`./swings/${file}`);
  client1.commandsb.set(commandb.data.name, commandb);
}
client1.commands = new Collection();
const commandFiles = fs.readdirSync('./bots/swings/swingsglobal').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./swingsglobal/${file}`);
  client1.commands.set(command.data.name, command);
}

client1.once(Events.ClientReady, () => {
  console.log(`Ready! (logged into ${client1.user.tag})`);
  client1.user.setPresence({activities: [{ name: `flights`, type: ActivityType.Watching}], status: 'idle'})
//client1.channels.cache.get("965490644967645204").messages.fetch("1056526111854571530").then(message => message.delete())
  /*const a = new EmbedBuilder()
	.setColor("#0096FF")
	.setTitle('<:fv:1056514422958477312> Schedule')
	//.setAuthor({ name: 'Flight Manager'})
	.setDescription('In this channel you will find all upcoming FlyValle departures. Flight information will be posted prior departure. This channel will be purged after the flight is concluded.')
	.setFooter({ text: `"You're the reason we fly!"` });

  client1.channels.cache.get("965490644967645204").send({ embeds: [a]})*/
});

client1.on(Events.InteractionCreate, async interaction => {
  if (interaction.isCommand()) {

  const commandb = client1.commandsb.get(interaction.commandName);
  const command = client1.commands.get(interaction.commandName);
  const cmd = "general"


  try {
    if (command) {
      await command.execute(interaction, client1, interaction.options._hoistedOptions);
    }
    if (commandb) {
      await commandb.execute(interaction, client1, interaction.options._hoistedOptions);
    }
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
} else if (interaction.isButton()) {
  const id = interaction.customId;
  const buttonthing = id.split(' ')
  switch(buttonthing[0]) {
    case "general":
      interaction.deferReply({ ephemeral: true})
      interaction.guild.channels.create({
        name: `ticket-${interaction.user.tag}`,
        type: discord.ChannelType.GuildText,
        permissionOverwrites: [{
                id: interaction.guild.roles.everyone,
                deny: [discord.PermissionFlagsBits.ViewChannel]},
                {id: interaction.user.id,
                allow: [discord.PermissionFlagsBits.ViewChannel]},
                {id: "1202801668656472136",
                allow: [discord.PermissionFlagsBits.ViewChannel]}],
        parent: "1202801786310631424",
    }).then(async channel => {
        const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`${interaction.user.tag}'s Ticket`)
	.setAuthor({ name: 'Ticket System' })
	.setDescription('Hello! Please describe what you need, it will take a bit to respond so please be patient!')
	.setFooter({ text: 'StellarWings Assistant' });

        const msg = await channel.send({ embeds: [embed] });
  const claim = new ButtonBuilder()
	.setCustomId(`claim ${msg.id} ${interaction.user}`)
	.setLabel('Claim 🙋‍♂️')
	.setStyle(ButtonStyle.Success);
  const closeticket = new ButtonBuilder()
	.setCustomId(`close ${msg.id} ${interaction.user.id}`)
	.setLabel('Close Ticket')
	.setStyle(ButtonStyle.Danger);
	 const row = new ActionRowBuilder()
	.addComponents(claim, closeticket);
        msg.edit({ embeds: [embed], components: [row] })
        await interaction.editReply({ content: `Created Ticket! <#${channel.id}>`});
  
    }).catch(async err => {
  
        await console.log(err)
  
    });
      break;
      case "claim":
        if (interaction.member.roles.cache.has("1202801668656472136")) {
        interaction.reply({ content: "Ticket Claimed",ephemeral: true })
        interaction.channel.send({ content: `🙋‍♂️ | Your ticket will be handled by ${interaction.user.tag}.` })
        const msgid = buttonthing[1];
        const claim = new ButtonBuilder()
        .setCustomId(`claim ${msgid} ${buttonthing[2].tag}`)
        .setLabel('Claim 🙋‍♂️')
        .setStyle(ButtonStyle.Success)
        .setDisabled(true);
        const closeticket = new ButtonBuilder()
        .setCustomId(`close ${msgid} ${buttonthing[2].id}`)
        .setLabel('Close Ticket')
        .setStyle(ButtonStyle.Danger);
         const row = new ActionRowBuilder()
        .addComponents(claim, closeticket);
        const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`${buttonthing[2].tag}'s Ticket`)
	.setAuthor({ name: 'Ticket System' })
	.setDescription('Here please describe what you need, it will take a bit to respond so please be patient!')
	.setFooter({ text: 'StellarWings Assistant' });
  client1.channels.cache.get(interaction.channelId).messages.edit(msgid, {components: [row], embeds: [embed]})


        } else interaction.reply({ content: "Invalid Permissions.",ephemeral: true })
        break;
      case "close":
        interaction.reply({ content: "Preparing...", ephemeral: true });
        if (interaction.member.roles.cache.has("1202801668656472136")) {
        const embed = new EmbedBuilder()  
	.setColor(0x0099FF)
	.setTitle(`Close ticket`)
	.setAuthor({ name: 'Ticket System' })
	.setDescription(`${interaction.user.tag} would like to close this ticket.`)
	.setFooter({ text: 'StellarWings Assistant' });
  const msg = await interaction.channel.send({ embeds: [embed] });
  const finalclose = new ButtonBuilder()
        .setCustomId(`finalclose ${interaction.channelId} ${buttonthing[2]}`)
        .setLabel('Close Ticket')
        .setStyle(ButtonStyle.Danger);
        const cancel = new ButtonBuilder()
        .setCustomId(`cancel ${msg.id}`)
        .setLabel('Cancel')
        .setStyle(ButtonStyle.Secondary);
         const row = new ActionRowBuilder()
        .addComponents(finalclose, cancel);
        msg.edit({ content: `<@${buttonthing[2]}>` })
        msg.edit({  embeds: [embed], components: [row] })
}
        break;
        case "finalclose":
        interaction.deferReply({ ephemeral: true })
        const file = await createTranscript(interaction.channel, {
          returnBuffer: false,
          filename: `${interaction.channel.name}-stellarwingstranscript.html`
        })
        const msg = await client1.channels.cache.get('1201881995089547274').send({ files: [file] })
        const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Ticket Closed')
	.setAuthor({ name: 'Ticket System' })
	.setDescription('This ticket was closed, use the buttons below to view/download transcript.')
  .addFields(
    { name: 'Ticket Owner', value: `${buttonthing[2]}`, inline: true },
    { name: 'Ticket Name', value: `${interaction.channel.name}`, inline: true }
  )
	.setFooter({ text: 'Stellarwings Assistant' });
  const view = new ButtonBuilder()
  .setLabel('View Transcirpt')
  .setURL(`https://mahto.id/chat-exporter?url=${msg.attachments.first()?.url}`)
  .setStyle(ButtonStyle.Link);
  const download = new ButtonBuilder()
  .setLabel('Download Transcript')
  .setURL(`${msg.attachments.first()?.url}`)
  .setStyle(ButtonStyle.Link);
   const row3 = new ActionRowBuilder()
  .addComponents(view, download);
        client1.channels.cache.get('1201881995089547274').send({ embeds: [exampleEmbed], components: [row3] })
        interaction.channel.delete()
          break;
        case "cancel":
          client1.channels.fetch(interaction.channelId).then(channel => {
            channel.messages.delete(buttonthing[1]);
        });
          break;
      
  }
} else return
});
client1.login(token5)