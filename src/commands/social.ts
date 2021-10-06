import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

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
        .addChoices([
          ['Site', 'site'],
          ['Github', 'github'],
          ['Instagram', 'instagram'],
          ['WhatsApp', 'whatsapp'],
          ['LinkedIn', 'linkedin'],
          ['Discord', 'discord'],
        ])
        .setRequired(true),
    ),
  execute: async (interaction: CommandInteraction) => {
    const socialMedia = interaction.options.getString('rede');
    console.log(socialMedia);

    switch (socialMedia) {
      case 'site':
        await interaction.reply(
          'Site do IFPE Open Source:\nhttps://www.ifpeopensource.com.br/',
        );
        return;
      case 'github':
        await interaction.reply(
          'GitHub do IFPE Open Source:\nifpeopensource\nhttps://github.com/ifpeopensource',
        );
        return;
      case 'instagram':
        await interaction.reply(
          'Instagram do IFPE Open Source:\n@ifpeopensource\nhttps://www.instagram.com/ifpeopensource/',
        );
        return;
      case 'whatsapp':
        await interaction.reply(
          'Grupo no WhatsApp do IFPE Open Source:\nhttps://chat.whatsapp.com/DkOVpQuY13NCeRzyEaNwvJ',
        );
        return;
      case 'linkedin':
        await interaction.reply(
          'LinkedIn do IFPE Open Source:\nhttps://www.linkedin.com/company/ifpe-open-source',
        );
        break;
      case 'discord':
        await interaction.reply(
          'Servidor no Discord do IFPE Open Source: \nhttps://discord.gg/QjvN9HRA6C',
        );
        break;
      default:
        await interaction.reply({
          content: 'Não conheço essa rede social...',
          ephemeral: true,
        });
    }
  },
};
