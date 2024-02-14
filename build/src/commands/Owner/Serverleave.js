import OrasCommand from "../../abstract/OrasCommand.js";

import load from "lodash";
import { inspect } from "util";

export default class Serverleave extends OrasCommand {

    constructor(client) {

        super(client);

        this.name = "serverleave";

        this.aliases = [];

        this.cat = "sikey";

        this.manage = false;

        this.premium = {

            guild: false,

            user: false,

        };

        this.dev = false;

        this.vote = false;

        this.exec = async (message, args, prefix) => {
        let guild = client.guilds.cache.get(args[0]);

    if (!guild)

      return message.reply({

        content: 'Could not find the Guild to Leave',

      });

    guild

      .leave()

      .then((g) => {

        message.channel.send({

          content: `Left \`${g.name} | ${g.id}\``,

        });

      })

      .catch((e) => {

        message.reply(`${e.message ? e.message : e}`, {

          code: 'js',
          
          });
     })
}     
}     
}