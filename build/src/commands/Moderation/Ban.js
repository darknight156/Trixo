import OrasCommand from "../../abstract/OrasCommand.js";
import { PermissionsBitField } from "discord.js";
import { Client } from "discord.js";

export default class Ban extends OrasCommand {
    constructor(client) {
     super(client);
     this.name = "ban",
     this.aliases = ['ban'],
     this.cat = "moderation",
     this.desc = "Bans a user from the server."
     this.usage = "<user> [reason]",
         this.premium = {
         guild: false,
         user: false,
       };
     this.userPerms = ["BanMembers"],
     this.clientPerms = ["BanMembers"],
     this.exec = async (message, args, prefix) => {
       const member = message.mentions.members.first();
       const reason = args.slice(1).join(' ');
         
         if(!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)){
   
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
        value: `You are lacking permissions : Ban Members`,
    
    }
])

return message.channel.send({ embeds: [perms] });

         } else {
   
       if (!member) {

        let vuser = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Ban Usage`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
        > Somebody is breaking rules again and again | ban him from the server as punishment`)
        .addFields([
            {
                name: `Aliases`,
                value: `No Aliases`,
            
            }
        ])
        .addFields([
            {
                name: `Usage`,
                value: `\`\`\`ban [member] [reason]\`\`\``,
            
            }
        ])

        return message.channel.send({ embeds: [vuser] });
       }
             
      if (!member.bannable) {

        let cban = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Can't Ban`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:cross_trixo:1191728814204649552> | I cannot ban this user.`)

        return message.channel.send({ embeds: [cban] });
       }
   
       if (!reason) {

        let reban = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Provide A Reason`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`Please provide a ban reason.`)
        return message.channel.send({ embeds: [reban] });
       }
   
       try {
        let banned = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Banned User`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:tick_trixo:1191728811096674404> | ${member.user.tag} has been banned from the server.`)
         await member.ban({ reason })
         return message.channel.send({ embeds: [banned] });
       } catch (err) {
         console.error(err);
         message.reply({ content: 'An error occurred while trying to ban this user.' });
       }
     }
   }
    }
   }