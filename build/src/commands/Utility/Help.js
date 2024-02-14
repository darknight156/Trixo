import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
export default class Help extends OrasCommand {
  constructor(client) {
    super(client);
    this.name = "help";
    this.aliases = [];
    this.cat = "utility";
    this.desc = "Provides with the help menu of the bot";
    this.usage = "help [command/category]";
    this.vc = false;
    this.dev = false;
    this.premium = {
      guild: false,
      user: false,
    };
    this.exec = async (message, args, prefix) => {
      if (!args[0]) {
        let em = this.client.utils
          .premiumEmbed(message.guildId)
          .setAuthor({
            name: `Help Panel`,
            iconURL: this.client.user.displayAvatarURL(),
          })
          .setFooter({
                                        text: `Requested By: ${message.author.tag}`,
                        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
                                    })
          .setDescription(
            `<:annc_trixo:1191723231065948250> __**Hey Its ${this.client.user.username}**__ – your Discord Music Bot! Packed with awesome features, buttons-based menu, and optional search engine support. Enjoy
**High-Quality Music** from diverse sources like SoundCloud, Spotify, Deezer, and more! 🎵`,
          )
          .addFields([
            {
              name: `<:category_trixo:1191723237239947324> __Commands__`,
              value: `${this.client.emoji.helpMenu.music} \`:\`**Music**\n${this.client.emoji.helpMenu.filters} \`:\`**Filters**\n${this.client.emoji.helpMenu.settings} \`:\`**Settings**\n${this.client.emoji.helpMenu.moderation} \`:\`**Moderation**\n${this.client.emoji.helpMenu.utility} \`:\`**Utilities**\n${this.client.emoji.helpMenu.info} \`:\`**Information**\n${this.client.emoji.helpMenu.allCommands} \`:\`**All Commands**\n\n<:star_trixo:1191746366381248563> __**Statistics**__\n<:idk_trixo:1191745694084640891> **Server** \`:\` \`${await this.client.cluster
                        .broadcastEval((x) => x.guilds.cache.size)
                        .then((result) => result.reduce((a, b) => a + b, 0))}\`\n<:tt:1191745700644532274> **Users** \`:\` \`${await this.client.cluster
                        .broadcastEval((c) => c.guilds.cache
                        .filter((x) => x.available)
                        .reduce((a, g) => a + g.memberCount, 0))
                        .then((r) => r.reduce((acc, memberCount) => acc + memberCount, 0))}\`\n<:pp:1191745703588937868> **Latency** \`:\` \`${this.client.ws.ping}ms\``,
            },
          ])
          .setThumbnail(this.client.user.displayAvatarURL());
          let k1 = this.client.utils.button(`link`, `Invite Me`, null, null, `${this.client.config.botinvite}`, this.client.emoji.invite);
          let k2 = this.client.utils.button(`link`, `Support`, null, null, `${this.client.config.server}`, this.client.emoji.support);
          let k3 = this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote)
          let row = this.client.utils.actionRow([k1,k2,k3]);
        let menuOption = this.client.utils.menuOption(
          `Home`,
          `${this.client.emoji.helpMenu.home}`,
          `Returns you to the help menu page of Help Command`,
          `help-home`,
        );
        let menuOption1 = this.client.utils.menuOption(
          `Music`,
          `${this.client.emoji.helpMenu.music}`,
          `Provides you the commands under Music Category`,
          `music-help`,
        );
        let menuOption2 = this.client.utils.menuOption(
          `Filters`,
          `${this.client.emoji.helpMenu.filters}`,
          `Lists the commands under Filters catgory`,
          `filter-help`,
        );
        let menuOption3 = this.client.utils.menuOption(
          `Settings`,
          `${this.client.emoji.helpMenu.settings}`,
          `Lists the Settings commands of the bot`,
          `settings-help`,
        );
        let menuOption4 = this.client.utils.menuOption(
          `Moderation`,
          `${this.client.emoji.helpMenu.moderation}`,
          `Lists the Moderation commands of the bot`,
          `moderation-help`,
        );
        let menuOption5 = this.client.utils.menuOption(
          `Utilities`,
          `${this.client.emoji.helpMenu.utility}`,
          `Lists the Utility commands of the bot`,
          `utility-help`,
        );
        let menuOption6 = this.client.utils.menuOption(
          `Information`,
          `${this.client.emoji.helpMenu.info}`,
          `Provides with the informative commands of bot`,
          `info-help`,
        );
        let menuOption7 = this.client.utils.menuOption(
          `All Commands`,
          `${this.client.emoji.helpMenu.allCommands}`,
          `Lists All of the Commands of the bot`,
          `all-help`,
        );
        let menus = [
          menuOption,
          menuOption1,
          menuOption2,
          menuOption3,
          menuOption4,
          menuOption5,
          menuOption6,
          menuOption7,
        ];
        let menu = this.client.utils.menu(`🎧 | Select Here To Browse`, `oops`, menus);
        let msg = await message.reply({
          embeds: [em],
          components: [this.client.utils.actionRow([menu]), row],
        });
        let collector = await msg.createMessageComponentCollector({
          filter: (b) => {
            if (b.user.id === message.author.id) return true;
            else
              return b.reply({
                content: `${this.client.emoji.cross} You are not the help command requester`,
                ephemeral: true,
              });
          },
          time: 100000 * 7,
        });
        collector.on("collect", async (interaction) => {
          if (interaction.isSelectMenu()) {
            for (const value of interaction.values) {
              if (value === `music-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Music Commands`)
                        .addFields([
                          {
                            name: `Music [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "music",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "music")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `filter-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Filter Commands`)
                        .addFields([
                          {
                            name: `Filters [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "filters",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "filters")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `settings-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Settings Commands`)
                        .addFields([
                          {
                            name: `Settings [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "settings",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "settings")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `moderation-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Moderation Commands`)
                        .addFields([
                          {
                            name: `Moderation [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "moderation",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "moderation")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `utility-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Utility Commands`)
                        .addFields([
                          {
                            name: `Utility [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "utility",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "utility")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `info-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Informative Commands`)
                        .addFields([
                          {
                            name: `Information [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "info",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "info")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `all-help`) {
                return interaction
                  .update({
                    embeds: [
                      this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`All Commands`)
                        .setDescription(
                          `This is the all commands list of the bot ${this.client.user.username}`,
                        )
                        .addFields([
                          {
                            name: `<:music_trixo:1191723200204242976> Music [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "music",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "music")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                          {
                            name: `<:filters_trixo:1191723208534142986> Filters [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "filters",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "filters")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                            {
                            name: `<:settings_trixo:1191734707474415737> Settings [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "settings",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "settings")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                            {
                            name: `<:moderation_trixo:1200306176932462632> Moderation [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "moderation",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "moderation")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                          {
                            name: `<:utility_trixo:1191723194298671184> Utility [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "utility",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "utility")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                          {
                            name: `<:info_trixo:1191724035663478824> Information [${
                              this.client.commands.messages.filter(
                                (x) => x.cat && x.cat === "info",
                              ).size
                            }]`,
                            value: `${this.client.commands.messages
                              .filter((x) => x.cat && x.cat === "info")
                              .map((x) => `\`${x.name}\``)
                              .sort()
                              .join(", ")}`,
                          },
                        ])
                        .setFooter({
            text: `Thanks For Selecting ${this.client.user.username}`,
            iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
          })
                        .setThumbnail(this.client.user.displayAvatarURL()),
                    ],
                  })
                  .catch(() => {});
              } else if (value === `help-home`) {
                return interaction.update({
                  embeds: [em],
                });
              }
            }
          }
        });
        collector.on("end", async () => {
          if (!msg) return;
          else
            return await msg
              .edit({
                components: [
                  this.client.utils.actionRow([menu.setDisabled(true)]),
                ],
              })
              .catch(() => {});
        });
        return;
      } else {
        let cmd =
          this.client.commands.messages.get(args[0]) ||
          this.client.commands.messages.find(
            (c) => c.aliases && c.aliases.includes(args[0]),
          );
        if (args[0].toLowerCase() === "music")
          return message.reply({
            embeds: [
              this.client.utils
                .premiumEmbed(message.guild.id)
                .setDescription(
                  ` __**Music Commands**__ **[${
                    this.client.commands.messages.filter(
                      (x) => x.cat && x.cat === "music",
                    ).size
                  }]**\n${this.client.commands.messages
                    .filter((x) => x.cat && x.cat === "music")
                    .map((y) => `\`${y.name}\``)
                    .sort()
                    .join(", ")}`,
                )
                .setAuthor({
                  name: `${this.client.user.username}`,
                  iconURL: this.client.user.displayAvatarURL(),
                })
                .setFooter({
                  text: `Requested By: ${message.author.tag}`,
                  iconURL: message.author.displayAvatarURL({ dynamic: true }),
                }),
            ],
          });
        if (
          args[0].toLowerCase() === `filters` ||
          args[0].toLowerCase() === `filter`
        )
          return message.reply({
            embeds: [
              this.client.utils
                .premiumEmbed(message.guild.id)
                .setDescription(
                  ` __**Filter Commands**__ **[${
                    this.client.commands.messages.filter(
                      (x) => x.cat && x.cat === "filters",
                    ).size
                  }]**\n${this.client.commands.messages
                    .filter((x) => x.cat && x.cat === "filters")
                    .map((y) => `\`${y.name}\``)
                    .sort()
                    .join(", ")}`,
                )
                .setAuthor({
                  name: `${this.client.user.username}`,
                  iconURL: this.client.user.displayAvatarURL(),
                })
                .setFooter({
                  text: `Requested By: ${message.author.tag}`,
                  iconURL: message.author.displayAvatarURL({ dynamic: true }),
                }),
            ],
          });
        if (
          args[0].toLowerCase() === `info` ||
          args[0].toLowerCase() === `information`
        )
          return message.reply({
            embeds: [
              this.client.utils
                .premiumEmbed(message.guild.id)
                .setDescription(
                  `__**Informative Commands**__ **[${
                    this.client.commands.messages.filter(
                      (x) => x.cat && x.cat === "info",
                    ).size
                  }]**\n${this.client.commands.messages
                    .filter((x) => x.cat && x.cat === "info")
                    .map((y) => `\`${y.name}\``)
                    .sort()
                    .join(", ")}`,
                )
                .setAuthor({
                  name: `${this.client.user.username}`,
                  iconURL: this.client.user.displayAvatarURL(),
                })
                .setFooter({
                  text: `Requested By: ${message.author.tag}`,
                  iconURL: message.author.displayAvatarURL({ dynamic: true }),
                }),
            ],
          });
        if (args[0].toLowerCase() === `utility`)
          return message.reply({
            embeds: [
              this.client.utils
                .premiumEmbed(message.guild.id)
                .setDescription(
                  `__**Utility Commands**__ **[${
                    this.client.commands.messages.filter(
                      (x) => x.cat && x.cat === "utility",
                    ).size
                  }]**\n${this.client.commands.messages
                    .filter((x) => x.cat && x.cat === "utility")
                    .map((y) => `\`${y.name}\``)
                    .sort()
                    .join(", ")}`,
                )
                .setAuthor({
                  name: `${this.client.user.username}`,
                  iconURL: this.client.user.displayAvatarURL(),
                })
                .setFooter({
                  text: `Requested By: ${message.author.tag}`,
                  iconURL: message.author.displayAvatarURL({ dynamic: true }),
                }),
            ],
          });
        if (
          !cmd &&
          ![
            "music",
            "filters",
            "filter",
            "info",
            "information",
            "utility",
            "dev",
            "owner",
          ].includes(args[0].toLowerCase())
        )
          return message.reply({
            embeds: [
              this.client.utils
                .errorEmbed()
                .setDescription(
                  `${
                    this.client.emoji.cross
                  } There is no such command "${args.join(" ")}"`,
                ),
            ],
          });
        let em = this.client.utils
          .premiumEmbed(message.guildId)
          .setDescription(
            `\`\`\`js\n<> = Required Arguments | [] = Optional Arguements\`\`\``,
          );
        em.addFields([
          {
            name: `Description:`,
            value: `${cmd.desc ? cmd.desc : "No Description Provided"}`,
          },
          {
            name: `Aliases`,
            value: `${
              cmd.aliases.length
                ? cmd.aliases
                    .map((x) => `\`${x}\``)
                    .sort()
                    .join(", ")
                : "No Aliases"
            }`,
            inline: false,
          },
          {
            name: `Usage`,
            value: `${cmd.usage ? cmd.usage : "No Usage Provided"}`,
            inline: false,
          },
        ])
          .setFooter({
            text: `Requested By: ${message.author.tag}`,
            iconURL: message.author.displayAvatarURL({ dynamic: true }),
          })
          .setAuthor({
            name: `${this.client.user.username}`,
            iconURL: this.client.user.displayAvatarURL(),
          });
        return message.reply({
          embeds: [em],
        });
      }
    };
  }
}
//# sourceMappingURL=Help.js.map
