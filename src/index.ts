require('dotenv').config();
import config from '../slappey.json';
import DiscordClient from './client/client';
import { Intents } from 'discord.js';
import { registerCommands, registerEvents } from './utils/registry';
import { createConnection } from 'typeorm';
import { DiscordUser } from './typeorm/entities/DiscordUser';

const client = new DiscordClient({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

(async () => {
  client.prefix = config.prefix || client.prefix;
  try {
    await createConnection({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: 3306,
      username: process.env.MYSQL_DB_USERNAME,
      password: process.env.MYSQL_DB_PASSWORD,
      database: process.env.MYSQL_DB_DATABASE,
      synchronize: true,
      entities: [DiscordUser],
    });
    await registerCommands(client, '../commands');
    await registerEvents(client, '../events');
    console.log('Connected to Database');
    await client.login(config.token);
  } catch (err) {
    console.log(err);
  }
})();
