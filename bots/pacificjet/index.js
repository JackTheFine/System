const { Client, Events, GatewayIntentBits, Collection, ActivityType } = require('discord.js');
const fs = require('node:fs');
const { token8 } = require('../../config.json');
require("./deploy-commands")

const Discord = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers] });

client.commandsa = new Collection();
const commandaFiles = fs.readdirSync('./bots/pacificjet/global').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./global/${file}`);
  client.commandsa.set(commanda.data.name, commanda);
}

client.commandsgc = new Collection();
const commandgcFiles = fs.readdirSync('./bots/pacificjet/groundc').filter(file => file.endsWith('.js'));

for (const file of commandgcFiles) {
  const commandgc = require(`./groundc/${file}`);
  client.commandsgc.set(commandgc.data.name, commandgc);
}

client.commandsfd = new Collection();
const commandfdFiles = fs.readdirSync('./bots/pacificjet/flightd').filter(file => file.endsWith('.js'));

for (const file of commandfdFiles) {
  const commandfd = require(`./flightd/${file}`);
  client.commandsfd.set(commandfd.data.name, commandfd);
}

client.once(Events.ClientReady, c => {
	console.log(`Ready! (logged into ${c.user.tag})`);
  client.user.setPresence({
  activities: [{ name: `planes fly`, type: ActivityType.Watching }],
  status: 'idle',
})});



client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isCommand()) return;
  const commandgc = client.commandsgc.get(interaction.commandName);
  const commandfd = client.commandsfd.get(interaction.commandName);
  const commanda = client.commandsa.get(interaction.commandName);
  try {
    if (commandgc) {
      await commandgc.execute(interaction, client, interaction.options._hoistedOptions);
    }
    if (commandfd) {
      await commandfd.execute(interaction, client, interaction.options._hoistedOptions);
    }
    if (commanda) {
      await commanda.execute(interaction, client, interaction.options._hoistedOptions);
    }
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(token8);