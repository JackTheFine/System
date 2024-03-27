const db = require("../../db.js");
db.loadFromFile("./db.json");
const fs = require("fs");
const { REST, Routes } = require('discord.js');
const { clientId10, token10 } = require('../../config.json');
const commandsb = [];
const commandbFiles = fs.readdirSync('./bots/kidnap/special').filter(file => file.endsWith('.js'));

for (const file of commandbFiles) {
  const commandb = require(`./special/${file}`);
  commandsb.push(commandb.data.toJSON());

}
const commands = [];

const commandFiles = fs.readdirSync('./bots/kidnap/special').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./special/${file}`);
  commands.push(command.data.toJSON());

}

const rest1 = new REST({ version: '10' }).setToken(token10);
try {
  //rest1.put(Routes.applicationCommands(clientId10), { body: commands });
  rest1.put(Routes.applicationGuildCommands(clientId10, "1177137404713390110"), { body: commands })
  db.set("botOn1","Up")
  console.log('Successfully registered kidnapper application commands.');
} catch (error) {
  console.error(error);
}