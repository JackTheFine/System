const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('proof-explanation')
    .setDescription('Co-Host Verification.')
    .addStringOption(option =>
      option.setName("text")
        .setDescription("Text to be sent.")
        .setRequired(true)
    )
    .addAttachmentOption(option =>
        option.setName("image")
          .setDescription("Image Proof")
          .setRequired(true)
      ),
      

  async execute(interaction, client) {
    if (interaction.channel.id == "1139215922628923422") {
    const text = interaction.options.getString('text')
    const file = interaction.options.getAttachment('image')
    const embed = new EmbedBuilder()
      .setTitle("Vote on warning, proof submitted.")
      .setImage(file.url)
      .setDescription(`This vote has commenced for:\n${text}\n\nUsing reactions you will vote on whether to warn the user or not; a thread will also be created below for you all to discuss in. below you can find the proof which was submitted below.`)
    interaction.guild.channels.cache.get('1216412757117763664').send({ embeds: [embed] }).then(embed => {embed.react("1️⃣").then(embed.react("2️⃣")).then(embed.react("3️⃣")).then(embed.react("4️⃣")).then(embed.react("5️⃣")).then(embed.react("6️⃣")).then(embed.react("7️⃣")).then(embed.startThread({name: 'Vote discussion', reason: 'Use this thread to discuss the proof.' }))})
    interaction.reply({ content: `Sent to <#1139216644745465856>`, ephemeral: true})

  } else return interaction.reply({ content: `This can only be used in <#1139215922628923422>.`, ephemeral: true})

  }
}