import { Client } from 'discord.js';

export default {
  name: 'ready',
  once: true,
  execute(client: Client) {
    console.log(`Pronto! Logado como ${client.user.tag}`);
  },
};
