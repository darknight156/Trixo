import moment from 'moment'; // npm i moment
moment.locale('ENG');

import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";

export default class UserInfo extends OrasCommand {
  constructor(client) {
    super(client);
    this.name = "userinfo";
    this.cat = "utility";
    this.aliases = ['ui'];
    this.description = 'gives userinfo';
    this.args = false;
    this.usage = '';
    this.premium = {
      guild: false,
      user: false,
    };
    this.exec = async (message, args, prefix) => {
      const permissions = {
        "ADMINISTRATOR": "Administrator",
        "MANAGE_GUILD": "Manage Server",
        "MANAGE_ROLES": "Manage Roles",
        "MANAGE_CHANNELS": "Manage Channels",
        "KICK_MEMBERS": "Kick Members",
        "BAN_MEMBERS": "Ban Members",
        "MANAGE_NICKNAMES": "Manage Nicknames",
        "MANAGE_EMOJIS": "Manage Emojis",
        "MANAGE_WEBHOOKS": "Manage Webhooks",
        "MANAGE_MESSAGES": "Manage Messages",
        "MODERATE_MEMBERS": "Moderate Members"
      };

      let member = message.mentions.members.first() || this.client.users.cache.get(args[0]) || message.member;

      let rolesname;
      let roles = member.roles.cache.sort((a, b) => b.position).map(role => role.toString()).slice(0, -1);
      const nick = member.nickname === null ? "None" : member.nickname;

      const bot = {
        "true": "Bot",
        "false": "Human"
      };

      const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      const mentionPermissions = mention.permissions.toArray() || [];
      const finalPermissions = [];
      for (const permission in permissions) {
        if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
      }

      rolesname = roles.join(" ");
      if (member.roles.cache.size < 1) rolesname = "No Roles";
      if (!member.roles.cache.size || member.roles.cache.size - 1 < 1) rolesname = `\`None\``;

      const embed = this.client.utils
        .premiumEmbed(message.guildId)
        .setAuthor({
          name: `${member.user.username}'s Information`,
          iconURL: member.user.displayAvatarURL({
            dynamic: true
          })
        })
        .addFields([{
            name: '__General Information__',
            value: `**Name: **${member.user.username}#${member.user.discriminator}\n**ID: **${member.id}\n**Nickname: **${nick}\n**User Type: **${bot[member.user.bot]}\n**Account Created: **<t:${moment.utc(member.user.createdAt).format('X')}:R>\n**Server Joined: **<t:${moment.utc(member.joinedAt).format('X')}:R>`
          },
          {
            name: '__Role Info__',
            value: `**Roles: **[${roles.length || '0'}]\n${rolesname || 'None'}`
          }
        ])
      
      
      .setThumbnail(member.user.displayAvatarURL({ dynamic : true }))
        .setFooter({
          text: `Requested by ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL({
            dynamic: true
          })
        })
        .setTimestamp();

      await message.reply({
        embeds: [embed]
      });
    };
  }
}
