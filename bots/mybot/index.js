const db = require("../../db.js");
db.loadFromFile("./db.json");
const { Client, Events, GatewayIntentBits, Collection, ActivityType } = require('discord.js');
const fs = require('node:fs');
const { token } = require('../../config.json');
require("./deploy-commands")
require("../quantum/index1")
require("../quantumflight/index")
require("../pacificjet/index")
require("../SKN/index1")

const Discord = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMembers] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`../../commands/${file}`);
  client.commands.set(command.data.name, command);
}
client.commandsa = new Collection();
const commandaFiles = fs.readdirSync('./bots/mybot/special').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./special/${file}`);
  client.commandsa.set(commanda.data.name, commanda);
}

client.once(Events.ClientReady, c => {
	console.log(`Ready! (logged into ${c.user.tag})`);
  client.user.setPresence({
  activities: [{ name: `coding.mp3`, type: ActivityType.Listening }],
  status: 'idle',
})});



client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  const commanda = client.commandsa.get(interaction.commandName);
  try {
    if (command) {
      await command.execute(interaction, client, interaction.options._hoistedOptions);
    }
    if (commanda) {
      await commanda.execute(interaction, client, interaction.options._hoistedOptions);
    }
  } catch (error) {
    console.error(error);
    return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(token);
db.set("botOn","Up")