import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
import { PermissionsBitField } from "discord.js";

export default class Unlock extends OrasCommand {
constructor(client) {
  super(client);
  this.name = "unlock",
  this.cat = "moderation",
  this.desc = "Unlocks the current channel.",
  this.usage = "[reason]",
  this.userPerms = ["ManageChannels"],
  this.botPerms = ["ManageChannels"],
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
      const reason = args.join(" ") || "No reason provided.";

      // Update the permissions for @everyone to allow sending messages and adding reactions
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: true,
        AddReactions: true,
      });

      let lock = this.client.utils
        .premiumEmbed(message.guildId)
        .setAuthor({
            name: `Unlocked`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:tick_trixo:1191728811096674404> | SuccessFully **Unlocked** ${message.channel}`)
        
        return message.channel.send({ embeds: [lock] });

      // Send a success message
      await message.channel.send(`🔓 This channel has been unlocked.\n\n**Reason:** ${reason}`);
    } catch (err) {
      console.error(err);
      message.reply("An error occurred while trying to unlock this channel.");
    }
  }
}
}
}