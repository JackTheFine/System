const Discord = module.require("discord.js");
const { EmbedBuilder } = require("discord.js")

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('suggest')
    .setDescription('suggest somthing')
    .addStringOption(option =>
      option.setName('suggestion')
        .setDescription('thing to suggest')
        .setRequired(true)),
  async execute(interaction, client) {
    const tte = interaction.options.getString('suggestion')
    const exampleEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('Suggestion')
      .setAuthor({ name: `${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ format: 'png' })}` })
      .setThumbnail(`${interaction.user.displayAvatarURL({ format: 'png' })}`)
      .setDescription(`${tte}`)
      .setTimestamp()
      .setFooter({ text: 'Rambam Bot', });
    interaction.guild.channels.cache.get('1011835704206184519').send({ embeds: [exampleEmbed] }).then(exampleEmbed => {
      exampleEmbed.react("✅").then(exampleEmbed.react("❌"));
    })
    const channel = client.channels.cache.get('1075839058187657266');
    const embed = new EmbedBuilder()

      .setAuthor({ name: `${interaction.user.tag}` })
      .setTitle(`Ran suggest and suggested ${tte}`)
      .setColor('#03fc2c')
      .setTimestamp()
    channel.send({ embeds: [embed] });
    return interaction.reply('Sent to suggestions.')

  }
}