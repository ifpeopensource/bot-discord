import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

import rants from '../linus_rants.json';

export default {
  data: new SlashCommandBuilder()
    .setName('linus')
    .setDescription('Responde com meme do Linus Torvalds.')
    .addSubcommand(command =>
      command
        .setName('rants')
        .setDescription('Envia uma rant aleatória do Linus.'),
    ),
  execute: async (interaction: CommandInteraction) => {
    const rant = rants[Math.floor(Math.random() * rants.length)];

    await interaction.reply(`> ${rant}\n> \n> *Linus Torvalds*`);
  }
};
