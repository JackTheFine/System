const discord = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder } = require("@discordjs/builders");
const db = require("../db.js");
db.loadFromFile("./bots/swings/swings/db.json");
if (!db.alreadyExists()) {
  db.set("flights", {});
  db.save();
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("flight")
    .setDescription("Flight host commands (Host only)")
    .addSubcommand(subcommand =>
      subcommand.setName("create")
        .setDescription("Create flight")
        .addStringOption(option =>
          option.setName("host")
            .setDescription("Flight Host")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("time")
            .setDescription("Flight Time")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("date")
            .setDescription("Flight Date")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("departure")
            .setDescription("Departure Airport")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("arrival")
            .setDescription("Arrival Airport")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("gate")
            .setDescription("Gate Number")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("aircraft")
            .setDescription("Aircraft to be used")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("edit")
        .setDescription("Edit flight by ID")
        .addStringOption(option =>
          option.setName("id")
            .setDescription("Flight ID")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("host")
            .setDescription("New Flight Host")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("time")
            .setDescription("New Flight Time")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("date")
            .setDescription("New Flight Date")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("departure")
            .setDescription("New Departure Airport")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("arrival")
            .setDescription("New Arrival Airport")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("gate")
            .setDescription("New Gate Number")
            .setRequired(true)
        )
        .addStringOption(option =>
          option.setName("aircraft")
            .setDescription("New Aircraft to be used")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName("delete")
        .setDescription("Delete Flight by ID")
        .addStringOption(option =>
          option.setName("id")
            .setDescription("Flight ID")
            .setRequired(true)
        )
        .addBooleanOption(option =>
          option.setName("deletechannel")
            .setDescription("Delete The Flight channel along with the post?")
            .setRequired(true)
        )
    ),
  async execute(interaction, client1) {
    await interaction.deferReply({ ephemeral: true });
    if (interaction.member.roles.cache.has("1203046307489652756")) {
      switch (interaction.options._subcommand) {
        case "create":
          if (
            !interaction.options.getString("host") ||
            !interaction.options.getString("time") ||
            !interaction.options.getString("date") ||
            !interaction.options.getString("departure") ||
            !interaction.options.getString("arrival") ||
            !interaction.options.getString("gate") ||
            !interaction.options.getString("aircraft")
          ) return interaction.editReply({ content: "Missing arguments." });

          var flights = db.get("flights");
          var id = Math.random().toString(36).substr(2, 9);
          if (flights[id]) return interaction.editReply({ content: "Foreseen error due to developer laziness. Please try again (very low chance of re-error).", ephemeral: true });

          flights[id] = {
            id,
            host: interaction.options.getString("host"),
            time: interaction.options.getString("time"),
            date: interaction.options.getString("date"),
            departure: interaction.options.getString("departure"),
            arrival: interaction.options.getString("arrival"),
            gate: interaction.options.getString("gate"),
            aircraft: interaction.options.getString("aircraft")
          }

          var reply = await client1.channels.cache.get("1214976120408113232").send({ embeds: [generateEmbed(flights[id])] });
          flights[id].messageId = reply.id;

          const sdate = interaction.options.getString("date").split('/')
          interaction.guild.channels.create({
            name: `flight-${sdate[0]}-${sdate[1]}-${sdate[2]}-${interaction.options.getString("time")}`,
            type: discord.ChannelType.GuildText,
            parent: "1199292775326306425",
        }).then(async channel => {
            await interaction.editReply({ content: `Flight created. Flight ID: ${id}, Channel: <#${channel.id}>`, ephemeral: true });
            flights[id].channelId = channel.id;

          db.set("flights", flights);
          db.save(); 
        }).catch(async err => {
      
            await console.log(err)
      
        });

          if (db.get("noFlightsMessageId")) {
            client1.channels.cache.get("1214976120408113232").messages.fetch(db.get("noFlightsMessageId")).then(message => message.delete());
            db.set("noFlightsMessageId", null);
            db.save();
          }
          const b = new EmbedBuilder()
            .setAuthor({ name: `${interaction.user.tag}` })
            .setTitle("Flight Created")
            .setDescription(`${id}`)
          client1.channels.cache.get("1199292900236873778").send({ embeds: [b] })
          break;
        case "edit":
          if (
            !interaction.options.getString("id") ||
            !interaction.options.getString("host") ||
            !interaction.options.getString("time") ||
            !interaction.options.getString("date") ||
            !interaction.options.getString("departure") ||
            !interaction.options.getString("arrival") ||
            !interaction.options.getString("gate") ||
            !interaction.options.getString("aircraft")
          ) return interaction.editReply({ content: "Missing arguments.", ephemeral: true });

          var flights = db.get("flights");
          var id = interaction.options.getString("id");
          if (!flights[id]) return interaction.editReply({ content: "Flight not found.", ephemeral: true });

          flights[id] = {
            id,
            host: interaction.options.getString("host"),
            time: interaction.options.getString("time"),
            date: interaction.options.getString("date"),
            departure: interaction.options.getString("departure"),
            arrival: interaction.options.getString("arrival"),
            gate: interaction.options.getString("gate"),
            aircraft: interaction.options.getString("aircraft"),
            messageId: flights[id].messageId,
            channelId
          }

          client1.channels.cache.get("1214976120408113232").messages.fetch(flights[id].messageId).then(message => message.edit({ embeds: [generateEmbed(flights[id])] }));

          db.set("flights", flights);
          db.save();

          interaction.editReply({ content: "Flight edited.", ephemeral: true });
          const d = new EmbedBuilder()
            .setAuthor({ name: `${interaction.user.tag}` })
            .setTitle("Flight Edited")
            .setDescription(`${id}`)
          client1.channels.cache.get("1199292900236873778").send({ embeds: [d] })
          break;
        case "delete":
          if (
            !interaction.options.getString("id")
          ) return interaction.editReply({ content: "Missing arguments.", ephemeral: true });

          var flights = db.get("flights");
          var id = interaction.options.getString("id");
          if (!flights[id]) return interaction.editReply({ content: "Flight not found.", ephemeral: true });

          client1.channels.cache.get("1214976120408113232").messages.fetch(flights[id].messageId).then(message => message.delete());

          db.set("flights", flights);
          db.save();
          if (interaction.options.getBoolean("deletechannel") == true) {
          const fetchedChannel = interaction.guild.channels.cache.get(flights[id].channelId);
          fetchedChannel.delete();
          }
          delete flights[id];
          interaction.editReply({ content: "Flight deleted.", ephemeral: true });

          if (!Object.values(flights).length) {
            const a = new EmbedBuilder()
            .setColor(0x0096FF)
              .setAuthor({ name: "Flight Manager" })
              .setTitle(" Flight Status")
              .setDescription("There are no current flights at this time, check back later for new flights. This message will update when a new flight is created in our systems.")
              .setFooter({ text: "Flight Manager | Last updated:" })
              .setTimestamp()
            var reply = await client1.channels.cache.get("1214976120408113232").send({ embeds: [a] });
            db.set("noFlightsMessageId", reply.id);
            db.save();
          }
          const c = new EmbedBuilder()
            .setAuthor({ name: `${interaction.user.tag}` })
            .setTitle("Flight Deleted")
            .setDescription(`${id}`)
          client1.channels.cache.get("1199292900236873778").send({ embeds: [c] })
          break;
      }
    } else {
      interaction.editReply({ content: "Invalid Permissions", ephemeral: true })
      const d = new EmbedBuilder()
            .setAuthor({ name: "Invalid Permissions" })
            .setTitle(`${interaction.user.tag}`)
            .setDescription(`Attempted to create/edit/delete a flight.`)
          return client1.channels.cache.get("1199292900236873778").send({ embeds: [d] })
    }
  }
}

function generateEmbed(flight) {
  var embed = new EmbedBuilder()
    .setAuthor({ name: "Flight Manager" })
    .setTitle("Flight Information")
    .setColor(0x0096FF)
    .addFields(
      { name: `Host`, value: flight.host, inline: true },
      { name: "Time", value: flight.time, inline: true },
      { name: "Date", value: flight.date, inline: true },
      { name: "Departure", value: flight.departure, inline: true },
      { name: "Arrival", value: flight.arrival, inline: true },
      { name: "Gate", value: flight.gate, inline: true },
      { name: "Aircraft", value: flight.aircraft, inline: true }
    )
    .setFooter({ text: "Flight ID: " + flight.id });
  return embed;
}

