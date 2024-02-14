import OrasCommand from "../../abstract/OrasCommand.js";
import { PermissionsBitField } from "discord.js";
import { Client } from "discord.js";

export default class Unban extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "unban",
  this.cat = "moderation",
  this.desc = "Unbans the specified user.",
  this.args = true,
  this.usage = "<user id>",
  this.userPerms = ["BanMembers"],
  this.clientPerms = ["BanMembers"],
  this.exec = async (message, args, prefix) => {
    const userId = args[0];
      
      if(!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)){

        return message.channel.send({content : "You are lacking permissions : Ban Members"})
    } else {

    if (!userId) {
      return message.reply("Please provide a valid user ID to unban.");
    }

    try {

      const bannedUser = await message.guild.members.unban(userId);
      message.reply(`Successfully unbanned user with ID ${userId}.`);

    } catch (err) {

      console.error(err);

      message.reply("Could not unban user. Please ensure the user ID is valid and that they are currently banned.");

    }
  }
}
}
}