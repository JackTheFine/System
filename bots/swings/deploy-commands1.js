
const fs = require("fs");
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token, token5, clientId5, guildId5 } = require('../../config.json');
const commandsb = [];
const commandbFiles = fs.readdirSync('./bots/swings/swings').filter(file => file.endsWith('.js'));

for (const file of commandbFiles) {
  const commandb = require(`./swings/${file}`);
  commandsb.push(commandb.data.toJSON());

}
const commands = [];

const commandFiles = fs.readdirSync('./bots/swings/swingsglobal').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./swingsglobal/${file}`);
  commands.push(command.data.toJSON());

}

const rest1 = new REST({ version: '10' }).setToken(token5);
try {
  rest1.put(Routes.applicationCommands(clientId5), { body: commands });
  rest1.put(Routes.applicationGuildCommands(clientId5, guildId5), { body: commandsb })
  console.log('Successfully registered swings application commands.');
} catch (error) {
  console.error(error);
}