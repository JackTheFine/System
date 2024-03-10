const { REST, Routes } = require('discord.js');
const { clientId8, guildId8, token8 } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');
//const commands = [];

//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/*for (const file of commandFiles) {
  const command = require(`../../commands/${file}`);
  commands.push(command.data.toJSON());

}*/
const commandsa = [];

const commandaFiles = fs.readdirSync('./bots/pacificjet/special').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./special/${file}`);
  commandsa.push(commanda.data.toJSON());

}

const rest = new REST({ version: '10' }).setToken(token8);

try {
  rest.put(Routes.applicationCommands(clientId8), { body: commandsa });
  //rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandsa });
  console.log('Successfully registered pacificjet commands');
} catch (error) {
  console.error(error);
}