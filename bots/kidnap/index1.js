const db = require("../../db.js");
db.loadFromFile("./db.json");
const { Client, Events, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, Collection, EmbedBuilder, ActivityType } = require('discord.js');
const fs = require('node:fs');
const { createTranscript } = require('discord-html-transcripts')
const discord = require("discord.js")
const { ButtonStyle } = require("discord.js")
const { token10 } = require('../../config.json');
require("./deploy-commands1")

const client1 = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers] });

client1.commandsb = new Collection();
const commandbFiles = fs.readdirSync('./bots/kidnap/special').filter(file => file.endsWith('.js'));

for (const file of commandbFiles) {
  const commandb = require(`./special/${file}`);
  client1.commandsb.set(commandb.data.name, commandb);
}
client1.commands = new Collection();
const commandFiles = fs.readdirSync('./bots/kidnap/special').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./special/${file}`);
  client1.commands.set(command.data.name, command);
}

client1.once(Events.ClientReady, () => {
  console.log(`Ready! (logged into ${client1.user.tag})`);
  client1.user.setPresence({activities: [{ name: `the kidnapped`, type: ActivityType.Watching}], status: 'idle'})
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


  try {
    if (command) {
      await command.execute(interaction, client1, interaction.options._hoistedOptions);
    }
    /*if (commandb) {
      await commandb.execute(interaction, client1, interaction.options._hoistedOptions);
    }*/
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
} 
});
client1.login(token10)