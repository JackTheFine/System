const { REST, Routes } = require('discord.js');
const { clientId9, guildId7, token9 } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');
//const commands = [];

//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/*for (const file of commandFiles) {
  const command = require(`../../commands/${file}`);
  commands.push(command.data.toJSON());

}*/
const commandsa = [];

const commandaFiles = fs.readdirSync('./bots/ccbot/special').filter(file => file.endsWith('.js'));

for (const file of commandaFiles) {
  const commanda = require(`./special/${file}`);
  commandsa.push(commanda.data.toJSON());

}

const rest = new REST({ version: '10' }).setToken(token9);

try {
  //rest.put(Routes.applicationCommands(tstclientId), { body: [] });
  rest.put(Routes.applicationGuildCommands(clientId9, "1023321832121704608"), { body: commandsa });
  console.log('Successfully registered CCBOT commands');
} catch (error) {
  console.error(error);
}