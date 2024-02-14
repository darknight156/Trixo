import OrasCommand from "../../abstract/OrasCommand.js";
import load from "lodash";
export default class Serverlist extends OrasCommand {

    constructor(client) {

        super(client);

        this.name = "serverlist";

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

        const serverlist = client.guilds.cache.map(

      (guild, i) => `\`[ • ]\` | ${guild.name} | \`[ ${guild.id} ]\` | \`[${guild.memberCount}]\``,

    );

    const mapping = load.chunk(serverlist, 10);

    const pages = mapping.map((s) => s.join('\n'));

    let page = 0;

    let em = this.client.utils
          .premiumEmbed(message.guildId)

      

      .setDescription(pages[page])

      .setFooter({

        text: `Page ${page + 1}/${pages.length}`,

        iconURL: message.author.displayAvatarURL({ dynamic: true }),

      })

      .setTitle(`${message.client.user.username} serverlist`);

   
            
            
                let b1 = this.client.utils.button(`custom_id`, `-->`, 2, `queue_cmd_but_1`);

            let b2 = this.client.utils.button(`custom_id`, `<--`, 2, `queue_cmd_but_2`);

            let b3 = this.client.utils.button(`custom_id`, `[+]`, 2, `queue_cmd_but_3`);

    let row = this.client.utils.actionRow([b1, b2, b3]);
              

    const msg = await message.channel.send({

      embeds: [em],

      components: [row],

    });

    const collector = message.channel.createMessageComponentCollector({

      filter: (b) => {

        if (b.user.id === message.author.id) return true;

        else {

          b.reply({

            ephemeral: true,

            content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`,

          });

          return false;

        }

      },

      time: 60000 * 5,

      idle: 30e3,

    });

    collector.on('collect', async (button) => {

      if (button.customId === 'queue_cmd_but_1') {

        await button.deferUpdate().catch(() => {});

        page = page + 1 < pages.length ? ++page : 0;

        let em1 = this.client.utils
          .premiumEmbed(message.guildId)

          .setColor(client.config.color)

          .setDescription(pages[page])

          .setFooter({

            text: `Page ${page + 1}/${pages.length}`,

            iconURL: message.author.displayAvatarURL({ dynamic: true }),

          })

          .setTitle(`${message.client.user.username} serverlist`);

        await msg.edit({

          embeds: [em1],

          components: [row],

        });

      } else if (button.customId === 'queue_cmd_but_2') {

        await button.deferUpdate().catch(() => {});

        page = page > 0 ? --page : pages.length - 1;

        let em2 = this.client.utils
          .premiumEmbed(message.guildId)

          .setColor(client.config.color)

          .setDescription(pages[page])

          .setFooter({

            text: `Page ${page + 1}/${pages.length}`,

            iconURL: message.author.displayAvatarURL({ dynamic: true }),

          })

          .setTitle(`${message.client.user.username} serverlist`);

        await msg

          .edit({

            embeds: [em2],

            components: [row],

          })

          .catch(() => {});

      } else if (button.customId === 'queue_cmd_but_3') {

        await button.deferUpdate().catch(() => {});

        collector.stop();

      } else return;

    });

    collector.on('end', async () => {

      await msg.edit({

        components: [],

      });

    });

    }

    }

    }