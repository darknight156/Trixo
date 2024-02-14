import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
import { PermissionsBitField } from "discord.js";

export default class Kick extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "kick",
  this.cat = "moderation",
  this.desc = "Kicks the specified user.",
  this.args = true,
  this.usage = "<user>",
  this.userPerms = ["KickMembers"],
  this.clientPerms = ["KickMembers"],
      this.premium = {
      guild: false,
      user: false,
    };
  this.exec = async (message, args, prefix) => {
    const member = message.mentions.members.first();

    if(!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)){

        let perms = this.client.utils
                   .premiumEmbed(message.guildId)
                   .setColor(client.config.color)
               .setAuthor({
                   name: `Trixo Permission`,
                   iconURL: this.client.user.displayAvatarURL(),
               })
.addFields([
    {
        name: `Permission`,
        value: `You are lacking permissions : Kick Members`,
    
    }
])

return message.channel.send({ embeds: [perms] });

    } else {

    if (!member) {
        let vuser = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Kick Usage`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
        > Somebody is breaking rules again and again | kick him from the server as punishment`)
        .addFields([
            {
                name: `Aliases`,
                value: `No Aliases`,
            
            }
        ])
        .addFields([
            {
                name: `Usage`,
                value: `\`\`\`kick [member] [reason]\`\`\``,
            
            }
        ])

        return message.channel.send({ embeds: [vuser] });
       }
    
      

    if (!member.kickable) {
        let ckick = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Can't Ban`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:cross_trixo:1191728814204649552> | I cannot kick this user! Do they have a higher role? Do I have kick permissions?`)

        return message.channel.send({ embeds: [ckick] });
       
    }
      

    const reason = args.slice(1).join(" ") || "No reason provided";
    let kicked = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Kicked User`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:tick_trixo:1191728811096674404> | ${member.user.tag} has been kicked by ${message.author.tag} for "${reason}"`)
    await member.kick(reason)
    return message.channel.send({ embeds: [kicked] });


  }
}
}
}
