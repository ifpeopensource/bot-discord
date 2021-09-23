import * as Sentry from '@sentry/node';
import { CommandInteraction } from 'discord.js';

export default {
  name: 'interactionCreate',
  async execute(interaction: CommandInteraction) {
    console.log(`${interaction.user.tag} em #${interaction.channel.name} disparou uma interação.`);
    if (!interaction.isCommand()) {
      return;
    }

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      await interaction.reply({
        content: 'Ocorreu um erro ao executar o comando!',
        ephemeral: true,
      });
    }
  },
};
