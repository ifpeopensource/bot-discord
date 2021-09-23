import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com pong!'),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply('Pong!');
    await interaction.followUp('Ping-pong? 🏓');
  },
};
