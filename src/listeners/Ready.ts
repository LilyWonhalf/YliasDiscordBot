import Logger from '@lilywonhalf/pretty-logger';
import { Client, Constants } from 'discord.js';
import { Listener } from '@sapphire/framework';
import { PieceContext } from '@sapphire/pieces';

export default class InteractionCreate extends Listener<typeof Constants.Events.CLIENT_READY> {
    constructor(context: PieceContext) {
        super(context, {
            event: Constants.Events.CLIENT_READY,
        });
    }

    run(client: Client): void {
        const nbGuilds = client.guilds.cache.size;

        Logger.info(`Logged in as ${client.user.username}#${client.user.discriminator}`);
        Logger.info(`Serving in ${nbGuilds} guild${nbGuilds > 1 ? 's' : ''}`);
    }
}
