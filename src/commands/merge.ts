import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('merge')
    .setDescription('Comemora merge de PRs!'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply(
      'Uhull!! 🎉🎉🎉\n\nhttps://giphy.com/gifs/26tOZ42Mg6pbTUPHW',
    );
  },
};
