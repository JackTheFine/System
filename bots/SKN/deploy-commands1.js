const db = require("../../db.js");
db.loadFromFile("./db.json");
const fs = require("fs");
const { REST, Routes } = require('discord.js');
const { token11, clientId11, guildId11 } = require('../../config.json');
const commandsb = [];
const commandbFiles = fs.readdirSync('./bots/SKN/SKN').filter(file => file.endsWith('.js'));

for (const file of commandbFiles) {
  const commandb = require(`./SKN/${file}`);
  commandsb.push(commandb.data.toJSON());

}
const commands = [];

const commandFiles = fs.readdirSync('./bots/SKN/SKN').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./SKN/${file}`);
  commands.push(command.data.toJSON());

}

const rest1 = new REST({ version: '10' }).setToken(token11);
try {
  //rest1.put(Routes.applicationCommands(clientId11), { body: [] });
  rest1.put(Routes.applicationGuildCommands(clientId11, guildId11), { body: commands })
  db.set("botOn1","Up")
  console.log('Successfully registered SKN application commands.');
} catch (error) {
  console.error(error);
}