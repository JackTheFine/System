const { REST, Routes } = require('discord.js');
const { clientId8, guildId8, token8 } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');
const commandsa = [];

const commandaFiles = fs.readdirSync('./bots/pacificjet/global').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./global/${file}`);
  commandsa.push(commanda.data.toJSON());

}
const commandsgc = [];

const commandgcFiles = fs.readdirSync('./bots/pacificjet/groundc').filter(file => file.endsWith('.js'));

for (const file of commandgcFiles) {
  const commandgc = require(`./groundc/${file}`);
  commandsgc.push(commandgc.data.toJSON());

}

const commandsfd = [];

const commandfdFiles = fs.readdirSync('./bots/pacificjet/flightd').filter(file => file.endsWith('.js'));

for (const file of commandfdFiles) {
  const commandfd = require(`./flightd/${file}`);
  commandsfd.push(commandfd.data.toJSON());

}

const rest = new REST({ version: '10' }).setToken(token8);

try {
  rest.put(Routes.applicationCommands(clientId8), { body: commandsa });
  rest.put(Routes.applicationGuildCommands(clientId8, "1222365233029451876"), { body: commandsgc });
  //rest.put(Routes.applicationGuildCommands(clientId8, "1222344960355860550"), { body: commandsfd });
  console.log('Successfully registered pacificjet commands');
} catch (error) {
  console.error(error);
}