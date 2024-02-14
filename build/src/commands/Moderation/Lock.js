import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
import { PermissionsBitField } from "discord.js";

export default class Lock extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "lock",
  this.cat = "moderation",
  this.desc = "Locks the current channel.",
  this.usage = "",
  this.userPerms = ["ManageChannels"],
  this.botPerms = ["ManageChannels"],
      this.premium = {
      guild: false,
      user: false,
    };
  this.exec = async (message, args, prefix) => {
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)){

        let perms = this.client.utils
        .premiumEmbed(message.guildId)
        .setAuthor({
            name: `Trixo Permission`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`You are lacking permission : Manage Channels`)

        return message.channel.send({ embeds: [perms] });
    } else {           
    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: false,
        AddReactions: false,
      });

      let lock = this.client.utils
        .premiumEmbed(message.guildId)
        .setAuthor({
            name: `Locked`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:tick_trixo:1191728811096674404> | SuccessFully **Locked** ${message.channel}`)
        
        return message.channel.send({ embeds: [lock] });
    } 
     catch (err) {

      console.error(err);

      return message.channel.send("An error occurred while trying to lock the channel.");
  }
}
}
 }
}