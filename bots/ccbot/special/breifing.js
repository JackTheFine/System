const max8 = `
    :red_square: | **Arming Roleplay**
> -unclicks & places red flag across window-
> -crouches onto floor towards door-
> -detaches girt bar from hooks-
> -inserts girt bar into floor brackets-

:green_square: | **Disarming Roleplay**
> -crouches onto floor towards door-
> -detaches girt bar from floor brackets-
> -stows girt bar into hooks-
> -unclicks & places red flag to normal position-
    `
const a220 = `
:red_square: | **Arming Roleplay**
> -removes key lock and stores away-
> -pushes lock lever up-
> -checks if green light appears to confirm door locked-

:green_square: | **Disarming Roleplay**
> -turns key lock on key hole-
> -pushes lock lever down-
> -checks if red light appears to confirm door unlocked
`
const a318 = `
> :red_square: | **Arming Roleplay**
> > -Check that the door handle is locked in the stowed position-
> > -Insert the girt bar securely into the floor brackets-
> > -Confirm the red flag is visible across the window-
> 
> :green_square: | **Disarming Roleplay**
> > -Unclick and place the red flag to its normal position-
> > -Remove the girt bar from the floor brackets-
> > -Ensure the door handle is locked in the stowed position-
`
const a320 = `
:red_square: | **Arming Roleplay**
> -removes safety pin with red flag and stores away-
> -pushes arming control lever down-
> -ensures the indicator reads 'armed'-

:green_square: | **Disarming Roleplay**
> -lifts arming control lever fully up-
> -ensures the indicator reads 'disarmed'-
> -installs safety pin with the red flag-
`
const a330 = `
:red_square: | **Arming Roleplay**
> -removes safety pin-
> -pushes lever down-
> -secures safe pin-

:green_square: | **Disarming Roleplay**
> -removes safety pin-
> -pushes lever up-
> -secures safety pin-
`
const b777 = `
:red_square: | **Arming Roleplay**
> -opens access cover, moves the mode selector to 'automatic' position-
> -crouches onto floor towards door-
> -checks the girt bar indicator flag viewing windows are yellow-

:green_square: | **Disarming Roleplay**
> -opens access cover, moves the mode selector to 'manual' position-
> -crouches onto floor towards door-
> -checks the girt bar indicator flag viewing windows are black-
`
const b787 = `
:red_square: | **Arming Roleplay**
> -pulls safety lever-
> -rotates arming control lever to the right-
> -pulls down the door lock lever-

:green_square:| **Disarming Roleplay**
> -pulls up the door lock lever-
> -pulls safety lever-
> -rotates the arming control to the left-`
const { EmbedBuilder, Embed } = require('discord.js')
const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('@discordjs/builders');
const { ButtonStyle } = require('discord.js');
const { json } = require('express');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('breifing')
    .setDescription('generate a breifing sheet')
    .addStringOption(option =>
      option.setName("flightcode")
        .setDescription("SPA-XXX")
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName("host")
        .setDescription("Hosts Username")
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName("plane")
        .setDescription("choose your plane")
        .setRequired(true)
        .addChoices(
          { name: '737-800/737Max8', value: "max8" },
          { name: 'A220', value: "a220" },
          { name: 'A318', value: "a318" },
          { name: 'A320', value: "a320" },
          { name: 'A321', value: "a321" },
          { name: 'A330', value: "a330" },
          { name: 'A350', value: "a350" },
          { name: 'B777', value: "b777" },
          { name: 'B787', value: "b787" },
        )
    )
    .addStringOption(option =>
      option.setName("num-of-cc")
        .setDescription("Number of cc.")
        .setRequired(true)
        .addChoices(
          { name: '1', value: "1" },
          { name: '2', value: "2" },
          { name: '3', value: "3" },
          { name: '4', value: "4" },
          { name: '5', value: "5" },
          { name: '6', value: "6" },
          { name: '7', value: "7" },
          { name: '8', value: "8" },
          { name: '9', value: "9" },
          { name: '10', value: "10" },
          { name: '11', value: "11" },
          { name: '12', value: "12" },
        )
    ),

  async execute(interaction, client) {
    if (interaction.channel.id == "1160743677384204340") {
    const flightnumber = interaction.options.getString("flightcode")
    const host = interaction.options.getString("host")
    const cc = interaction.options.getString("num-of-cc")
var plane = interaction.options.getString("plane")
let vals = [{ text: max8, value: "max8" },
{ text: a220, value: "a220" },
{ text: a318, value: "a318" },
{ text: a320, value: "a320" },
{ text: a320, value: "a320" },
{ text: a330, value: "a330" },
{ text: a330, value: "a350" },
{ text: b777, value: "b777" },
{ text: b787, value: "b787" }];
var roleplay = vals.find(x => plane == x.value).text; 
const sheet = new EmbedBuilder()
if (!plane == "a350" && !plane == "b777" && !plane == "b787" && !plane == "a330" && cc == "9" || cc == "10" || cc == "11" || cc == "12" ) {
  return interaction.reply({ content: "Max CC on a narrowbody is 8."})
}
    if (cc == "1") { 
      sheet.setTitle("Breifing sheet for 1 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > <@> | Gate Agent

      ✈️ | **Plane/Cruising Roles**
      > <@>  | Preflight CPT, Whole CPT, Arm & Disarm L2, Warm towels
      > <@${interaction.user.id}>  | Preflight FO, Whole FO, Arm & Disarm L1\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "2") { 
      sheet.setTitle("Breifing sheet for 2 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Gate Agent

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight whole, Whole CPT, Trivia, Arm & Disarm L1
      > @CC2 | Whole FO, Warm Towels, Arm & Disarm L2\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "3") { 
      sheet.setTitle("Breifing sheet for 3 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Gate Agent
      > @CC3 | Premium Lounge Attendant

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-Flight CPT, Premium Whole, Arm & Disarm L1
      > @CC2 | Economy CPT, Warm Towels
      > @CC3 | Pre-Flight FO, Economy FO, Arm & Disarm L1\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "4") { 
      sheet.setTitle("Breifing sheet for 4 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Gate Agent 
      > @CC3 | Premium Lounge Attendant
      > @CC4 | Investor Lounge Attendant

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT, Premium CPT, Arm & Disarm L1
      > @CC2 | Economy FO, Warm Towels 
      > @CC3 | Pre-flight FO, Premium FO, Arm & Disarm L2
      > @CC4 | Economy CPT, Trivia\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "5") { 
      sheet.setTitle("Breifing sheet for 5 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Gate Agent 1
      > @CC3 | Premium Lounge Attendant
      > @CC4 | Investor Lounge Attendant
      > @CC5 | Gate Agent 2

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT, Arm & Disarm L1
      > @CC2 | Economy FO
      > @CC3 | Pre-flight FO, Premium FO, Arm & Disarm L2
      > @CC4 | Economy CPT, Trivia
      > @CC5 | Premium CPT,  Warm Towels \`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "6") { 
      sheet.setTitle("Breifing sheet for 6 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Gate Agent 1
      > @CC3 | Premium Lounge Attendant
      > @CC4 | Investor Lounge Attendant
      > @CC5 | Gate Agent 2
      > @CC6 | Premium Lounge Table Service

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT, Trivia
      > @CC2 | ECO FO
      > @CC3 | Pre-flight FO, Warm Towels
      > @CC4 | Premium CPT, Arm & Disarm L1
      > @CC5 | ECO CPT
      > @CC6 | Premium FO, Arm & Disarm L2\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "7") { 
      sheet.setTitle("Breifing sheet for 7 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Gate Agent 1
      > @CC3 | Premium Lounge Attendant
      > @CC4 | Investor Lounge Attendant
      > @CC5 | Gate Agent 2
      > @CC6 | Premium Lounge Table Service
      > @CC7 | Investor Lounge Table Service

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT
      > @CC2 | ECO FO
      > @CC3 | Pre-flight FO, Warm Towels
      > @CC4 | Premium CPT
      > @CC5 | ECO CPT
      > @CC6 | Premium FO, Arm & Disarm L2
      > @CC7 | Trivia, Arm & Disarm L1\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "8") { 
      sheet.setTitle("Breifing sheet for 8 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Self Check-In Agent 2
      > @CC3 | Gate Agent 1
      > @CC4 | Premium Lounge Attendant
      > @CC5 | Investor Lounge Attendant
      > @CC6 | Gate Agent 2
      > @CC7 | Premium Lounge Table Service
      > @CC8 | Investor Lounge Table Service

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT
      > @CC2 | ECO FO
      > @CC3 | Pre-flight FO
      > @CC4 | Premium CPT
      > @CC5 | ECO CPT
      > @CC6 | Premium FO, Arm & Disarm L2
      > @CC7 | Trivia, Arm & Disarm L1
      > @CC8 | Warm Towels\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "9") { 
      sheet.setTitle("Breifing sheet for 9 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Self Check-In Agent 2
      > @CC3 | Gate Agent 1
      > @CC4 | Premium Lounge Attendant
      > @CC5 | Investor Lounge Attendant
      > @CC6 | Gate Agent 2
      > @CC7 | Premium Lounge Table Service
      > @CC8 | Investor Lounge Table Service
      > @CC9 | Premium Lounge Table Service 2

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT
      > @CC2 | ECO FO 
      > @CC3 | Pre-flight FO, Premium Mid
      > @CC4 | Premium CPT
      > @CC5 | ECO CPT
      > @CC6 | Premium FO, Arm & Disarm L2
      > @CC7 | Trivia, Arm & Disarm L1
      > @CC8 | Warm Towels
      > @CC9 | ECO Mid\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "10") { 
      sheet.setTitle("Breifing sheet for 10 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Self Check-In Agent 2
      > @CC3 | Gate Agent 1
      > @CC4 | Premium Lounge Attendant
      > @CC5 | Investor Lounge Attendant
      > @CC6 | Gate Agent 2
      > @CC7 | Premium Lounge Table Service
      > @CC8 | Investor Lounge Table Service
      > @CC9 | Premium Lounge Table Service 2
      > @CC10 | Investor Lounge Table Service 2

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT
      > @CC2 | ECO FO 
      > @CC3 | Pre-flight FO
      > @CC4 | Premium CPT
      > @CC5 | ECO CPT
      > @CC6 | Premium FO, Arm & Disarm L2
      > @CC7 | Trivia, Arm & Disarm L1
      > @CC8 | Warm Towels
      > @CC9 | ECO Mid
      > @CC10 | Premium Mid\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "11") { 
      sheet.setTitle("Breifing sheet for 11 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Self Check-In Agent 2
      > @CC3 | Gate Agent 1
      > @CC4 | Premium Lounge Attendant
      > @CC5 | Investor Lounge Attendant
      > @CC6 | Gate Agent 2
      > @CC7 | Premium Lounge Table Service
      > @CC8 | Investor Lounge Table Service
      > @CC9 | Premium Lounge Table Service 2
      > @CC10 | Investor Lounge Table Service 2
      > @CC11 | Premium Lounge Attendant 2

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT
      > @CC2 | ECO FO 
      > @CC3 | Pre-flight FO
      > @CC4 | Premium CPT
      > @CC5 | ECO CPT
      > @CC6 | Premium FO
      > @CC7 | Trivia, Arm & Disarm L1
      > @CC8 | Warm Towels
      > @CC9 | ECO Mid
      > @CC10 | Premium Mid
      > @CC11 | Arm & Disarm L2\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
    if (cc == "12") { 
      sheet.setTitle("Breifing sheet for 12 CC")
      sheet.setDescription(`\`\`\`
      <:SPACabinCrew:925881098762866698> | **Cabin Crew Briefing Sheet**
      > This list contains all assigned roles. I have also attached the arming and disarming procedures for this aircraft. When told, you must find your own door to arm & disarm; this will usually occur once boarding has concluded or before deboarding.
      > 
      > 📆 ${flightnumber} hosted by ${host} via the ${plane.toUpperCase()}
      
      ${roleplay}
      
      <:SPAUpperManagement:1028766645696606280> | **Airport Roles**
      > @CC1 | Self Check-In Agent
      > @CC2 | Self Check-In Agent 2
      > @CC3 | Gate Agent 1
      > @CC4 | Premium Lounge Attendant
      > @CC5 | Investor Lounge Attendant
      > @CC6 | Gate Agent 2
      > @CC7 | Premium Lounge Table Service
      > @CC8 | Investor Lounge Table Service
      > @CC9 | Premium Lounge Table Service 2
      > @CC10 | Investor Lounge Table Service 2
      > @CC11 | Premium Lounge Attendant 2
      > @CC12 | Investor Lounge Attendant 2

      :airplane: | **Plane/Cruising Roles**
      > @CC1 | Pre-flight CPT
      > @CC2 | ECO FO 
      > @CC3 | Pre-flight FO
      > @CC4 | Premium CPT
      > @CC5 | ECO CPT
      > @CC6 | Premium FO
      > @CC7 | Trivia, Arm & Disarm L1
      > @CC8 | Warm Towels
      > @CC9 | ECO Mid
      > @CC10 | Premium Mid
      > @CC11 | Arm & Disarm L2
      > @CC12 | Arm & Disarm L1\`\`\``)
      return interaction.reply({embeds: [sheet]})
    }
  } else return interaction.reply({ content: `Invalid Permissions.`, ephemeral: true})
  }
}