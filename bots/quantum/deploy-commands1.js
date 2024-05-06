const db = require("../../db.js");
db.loadFromFile("./db.json");
const fs = require("fs");
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token, token6, clientId6, guildId5 } = require('../../config.json');
const commandsb = [];
const commandbFiles = fs.readdirSync('./bots/quantum/quantum').filter(file => file.endsWith('.js'));

for (const file of commandbFiles) {
  const commandb = require(`./quantum/${file}`);
  commandsb.push(commandb.data.toJSON());

}
const commands = [];

const commandFiles = fs.readdirSync('./bots/quantum/quantum').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./quantum/${file}`);
  commands.push(command.data.toJSON());

}

const rest1 = new REST({ version: '10' }).setToken(token6);
try {
  rest1.put(Routes.applicationCommands(clientId6), { body: commands });
  //rest1.put(Routes.applicationGuildCommands(clientId5, guildId5), { body: commandsb })
  db.set("botOn1","Up")
  console.log('Successfully registered swings application commands.');
} catch (error) {
  console.error(error);
}