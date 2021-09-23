import 'dotenv/config';

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import * as fs from 'fs';

const commands = [];
const commandFiles = fs
  .readdirSync(
    `./${process.env.NODE_ENV === 'development' ? '' : 'dist/'}src/commands`,
  )
  .filter(file =>
    file.endsWith(process.env.NODE_ENV === 'development' ? '.ts' : '.js'),
  );

for (const file of commandFiles) {
  const command = require(`./commands/${file}`).default;
  commands.push(command.data.toJSON());
}

const server = new REST({ version: '9' }).setToken(
  process.env.DISCORD_BOT_TOKEN,
);

(async () => {
  try {
    await server.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_BOT_CLIENT_ID,
        process.env.DISCORD_BOT_GUILD_ID,
      ),
      { body: commands },
    );

    console.log('Comandos da aplicação registrados com sucesso.');
  } catch (error) {
    console.error(error);
  }
})();
