import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

import socialNetworks from '../social_networks.json';

export default {
  data: new SlashCommandBuilder()
    .setName('social')
    .setDescription(
      'Responde com informações sobre as redes do IFPE Open Source',
    )
    .addStringOption(option =>
      option
        .setName('rede')
        .setDescription('Rede social')
        .addChoices(...socialNetworks.choices)
        .setRequired(true),
    ),
  execute: async (interaction: CommandInteraction) => {
    const socialMedia = String(interaction.options.get('rede').value);
    console.log(socialMedia);

    if (Object.keys(socialNetworks.replies).includes(socialMedia)) {
      await interaction.reply({
        content: socialNetworks.replies[socialMedia],
      });
    } else {
      await interaction.reply({
        content: 'Não conheço essa rede social...',
        ephemeral: true,
      });
    }
  },
};
