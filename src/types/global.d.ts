/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Collection } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

declare module 'discord.js' {
  export interface CommandInteraction {
    channel: {
      name: string;
    };
  }

  interface Command {
    data: SlashCommandBuilder;
    execute(interaction: CommandInteraction): Promise<void>;
  }

  export interface Client {
    commands: Collection<Command>;
  }
}
