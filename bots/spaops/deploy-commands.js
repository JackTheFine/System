const { REST, Routes } = require('discord.js');
const { clientId7, guildId7, token7 } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');
//const commands = [];

//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/*for (const file of commandFiles) {
  const command = require(`../../commands/${file}`);
  commands.push(command.data.toJSON());

}*/
const commandsa = [];

const commandaFiles = fs.readdirSync('./bots/spaops/special').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./special/${file}`);
  commandsa.push(commanda.data.toJSON());

}

const rest = new REST({ version: '10' }).setToken(token7);

try {
  //rest.put(Routes.applicationCommands(clientId7), { body: commandsa });
  rest.put(Routes.applicationGuildCommands(clientId7, guildId7), { body: commandsa });
  console.log('Successfully registered SPAOPS commands');
} catch (error) {
  console.error(error);
}