const { Client, Events, GatewayIntentBits, Collection, ActivityType, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { EmbedBuilder, ButtonStyle } = require('discord.js');
const fs = require('node:fs');
const { token7 } = require('../../config.json');
require("./deploy-commands")

const Discord = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers] });

//client.commands = new Collection();
//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/*for (const file of commandFiles) {
  const command = require(`../../commands/${file}`);
  client.commands.set(command.data.name, command);
}*/
client.commandsa = new Collection();
const commandaFiles = fs.readdirSync('./bots/spaops/special').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./special/${file}`);
  client.commandsa.set(commanda.data.name, commanda);
}

client.once(Events.ClientReady, c => {
	console.log(`Ready! (logged into ${c.user.tag})`);
  client.user.setPresence({
  activities: [{ name: `trello`, type: ActivityType.Watching }],
  status: 'idle',
})});



client.on(Events.InteractionCreate, async interaction => {
  if (interaction.isCommand()) {
  //const command = client.commands.get(interaction.commandName);
  const commanda = client.commandsa.get(interaction.commandName);
  try {
    /*if (command) {
      await command.execute(interaction, client, interaction.options._hoistedOptions);
    }*/
    if (commanda) {
      await commanda.execute(interaction, client, interaction.options._hoistedOptions);
    }
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
} else if (interaction.isButton) {
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
  const id = interaction.customId;
  const buttonthing = id.split(' ')
  const member = interaction.guild.members.cache.get(buttonthing[4]);
  const embed2 = new EmbedBuilder()
  const m2 = new ButtonBuilder()
  const supervision = new ButtonBuilder()
  const finish = new ButtonBuilder()
  if (interaction.member.roles.cache.has("1105653389410443294")) {
  switch(buttonthing[0]) {
    case "m2":
      if (buttonthing[3] == "yes") {
      m2.setCustomId(`m2 ${buttonthing[1]} yes yes ${buttonthing[4]}`)
			m2.setLabel('Set M2 Completed')
			m2.setStyle(ButtonStyle.Success);
      m2.setDisabled(true)
      supervision.setCustomId(`supervision ${buttonthing[1]} yes yes ${buttonthing[4]}`)
			supervision.setLabel('Set Supervision Completed')
			supervision.setStyle(ButtonStyle.Success);
      supervision.setDisabled(true)
      finish.setCustomId(`finish ${buttonthing[1]} yes yes ${buttonthing[4]}`)
			finish.setLabel('Finish training')
			finish.setStyle(ButtonStyle.Danger);
      finish.setDisabled(false);
      embed2.setAuthor({ name: "OPS Assistant" })
      embed2.setTitle("<:SPA:1105865640474050590> | Trial Status:")
      embed2.setDescription(`
    > Module 2 Training - :green_circle:
    > Module 4 Supervision - :green_circle:
    `)
    embed2.setFooter({ text: "Last Updated:" })
    embed2.setTimestamp()
      } else {
        m2.setCustomId(`m2 ${buttonthing[1]} yes not ${buttonthing[4]}`)
        m2.setLabel('Set M2 Completed')
        m2.setStyle(ButtonStyle.Success);
        m2.setDisabled(true)
        supervision.setCustomId(`supervision ${buttonthing[1]} yes not ${buttonthing[4]}`)
        supervision.setLabel('Set Supervision Completed')
        supervision.setStyle(ButtonStyle.Danger);
        finish.setCustomId(`finish ${buttonthing[1]} yes not ${buttonthing[4]}`)
        finish.setLabel('Finish training')
        finish.setStyle(ButtonStyle.Danger);
        finish.setDisabled(true)
        embed2.setAuthor({ name: "OPS Assistant" })
        embed2.setTitle("<:SPA:1105865640474050590> | Trial Status:")
        embed2.setDescription(`
      > Module 2 Training - :green_circle:
      > Module 4 Supervision - :red_circle:
      `)
      embed2.setFooter({ text: "Last Updated:" })
      embed2.setTimestamp()
      }
      const row = new ActionRowBuilder()
			.addComponents(m2, supervision, finish);
      client.channels.cache.get(interaction.channelId).messages.edit(buttonthing[1], {embeds: [embed, embed2], components: [row]})
      interaction.reply({ content: 'Set `M2 Training` to completed.', ephemeral: true})
      break;
    case "supervision":
      if (buttonthing[2] == "yes") {
        m2.setCustomId(`m2 ${buttonthing[1]} yes yes ${buttonthing[4]}`)
        m2.setLabel('Set M2 Completed')
        m2.setStyle(ButtonStyle.Success);
        m2.setDisabled(true)
        supervision.setCustomId(`supervision ${buttonthing[1]} yes yes ${buttonthing[4]}`)
        supervision.setLabel('Set Supervision Completed')
        supervision.setStyle(ButtonStyle.Success);
        supervision.setDisabled(true)
        finish.setCustomId(`finish ${buttonthing[1]} yes yes ${buttonthing[4]}`)
        finish.setLabel('Finish training')
        finish.setStyle(ButtonStyle.Danger);
        finish.setDisabled(false);
        embed2.setAuthor({ name: "OPS Assistant" })
        embed2.setTitle("<:SPA:1105865640474050590> | Trial Status:")
        embed2.setDescription(`
      > Module 2 Training - :green_circle:
      > Module 4 Supervision - :green_circle:
      `)
      embed2.setFooter({ text: "Last Updated:" })
      embed2.setTimestamp()
      } else {
        m2.setCustomId(`m2 ${buttonthing[1]} not yes ${buttonthing[4]}`)
        m2.setLabel('Set M2 Completed')
        m2.setStyle(ButtonStyle.Danger);
        supervision.setCustomId(`supervision ${buttonthing[1]} not yes ${buttonthing[4]}`)
        supervision.setLabel('Set Supervision Completed')
        supervision.setStyle(ButtonStyle.Success);
        supervision.setDisabled(true)
        finish.setCustomId(`finish ${buttonthing[1]} not yes ${buttonthing[4]}`)
        finish.setLabel('Finish training')
        finish.setStyle(ButtonStyle.Danger);
        finish.setDisabled(true)
        embed2.setAuthor({ name: "OPS Assistant" })
        embed2.setTitle("<:SPA:1105865640474050590> | Trial Status:")
        embed2.setDescription(`
      > Module 2 Training - :red_circle:
      > Module 4 Supervision - :green_circle:
      `)
      embed2.setFooter({ text: "Last Updated:" })
      embed2.setTimestamp()
      }
      const row2 = new ActionRowBuilder()
			.addComponents(m2, supervision, finish);
      client.channels.cache.get(interaction.channelId).messages.edit(buttonthing[1], {embeds: [embed, embed2], components: [row2]})
      interaction.reply({ content: 'Set `M4 Supervision` to completed.', ephemeral: true})
      break;
    case "finish":
      m2.setCustomId(`m2 ${buttonthing[1]} yes yes ${buttonthing[4]}`)
        m2.setLabel('Set M2 Completed')
        m2.setStyle(ButtonStyle.Success);
        m2.setDisabled(true)
        supervision.setCustomId(`supervision ${buttonthing[1]} yes yes ${buttonthing[4]}`)
        supervision.setLabel('Set Supervision Completed')
        supervision.setStyle(ButtonStyle.Success);
        supervision.setDisabled(true)
        finish.setCustomId(`finish ${buttonthing[1]} yes yes ${buttonthing[4]}`)
        finish.setLabel('Finish training')
        finish.setStyle(ButtonStyle.Success);
        finish.setDisabled(false)
        embed2.setAuthor({ name: "OPS Assistant" })
        embed2.setTitle("<:SPA:1105865640474050590> | Trial Status:")
        embed2.setDescription(`
      > Module 2 Training - :green_circle:
      > Module 4 Supervision - :green_circle:
      `)
      embed2.setFooter({ text: "Last Updated:" })
      embed2.setTimestamp()
      const row1 = new ActionRowBuilder()
			.addComponents(m2, supervision, finish);
      client.channels.cache.get(interaction.channelId).messages.edit(buttonthing[1], {embeds: [embed, embed2], components: [row1]})
      member.roles.remove(interaction.guild.roles.cache.find(r => r.id === "1190788449062637679"))
      member.roles.remove(interaction.guild.roles.cache.find(r => r.id === "1190788449062637679"))
      interaction.channel.send({ content: `Congrats <@${buttonthing[4]}>! You passed your Intern/Co-Host Trainer Trial and will be ranked momentarily.` })
      member.roles.add(interaction.guild.roles.cache.find(r => r.id === "1105652585421090826"))
      member.roles.add(interaction.guild.roles.cache.find(r => r.id === "1105652585421090826"))
      interaction.reply({ content: 'Set `Finished` to yes.', ephemeral: true})
      break;
    }
  } else interaction.reply({ content: "Invalid Permissions", ephemeral: true})
}
});

client.login(token7);