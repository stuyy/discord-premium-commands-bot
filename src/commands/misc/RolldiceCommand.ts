import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import { getRepository } from 'typeorm';
import { DiscordUser } from '../../typeorm/entities/DiscordUser';

export default class RolldiceCommand extends BaseCommand {
  constructor(private userRepo = getRepository(DiscordUser)) {
    super('rolldice', 'misc', []);
  }

  async run(
    client: DiscordClient,
    message: Message,
    args: Array<string>
  ): Promise<any> {
    const findUser = await this.userRepo.findOne({
      discordId: message.author.id,
    });
    if (!findUser || !findUser?.premium)
      return message.channel.send('You cannot use that command');
    message.channel.send('Roll Dice Premium Command');
  }
}
