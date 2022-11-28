import { Client, GatewayIntentBits } from 'discord.js';

export default class Base extends Client {
  constructor(opt) {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
      allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false,
        ...opt,
      },
    });
  }
}
