import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
import { PermissionsBitField } from "discord.js";
import ms from "ms";
export default class Unmute extends OrasCommand {
 constructor(client) {
    super(client);
    this.name = "unmute",
    this.aliases = ["um"],
    this.adminPermit = true,
    this.userPerms = ["MuteMembers"],
    this.clientPerms = ["MuteMembers"],
    this.ownerPermit = false,
    this.cat = "moderation",
    this.exec = async (message, args, prefix) => {

        if(!message.member.permissions.has(PermissionsBitField.Flags.MuteMembers)){ return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.cross} | You are lacking permissions : Timeout Members`)]})
                                                                                      
        } else {

        if(!args[0])
        {
            return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.cross} | Command Usage : \`${prefix}unmute <user> [reason]\``)]})
        }

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.cross} | Please provide me a valid user.`)]})

        let reason = args.slice(1).join(' ');
        if(!reason) reason = 'No Reason given';

        if(user.id === client.user.id) return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.cross} | Hey I know your are dumb why u are proving it!`)]});
            
        if(!user.isCommunicationDisabled()) return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.cross} | I can't unmute that user.That user is not timed out.`)]})
        
        if(!user.manageable) return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.cross} | I can't unmute that user.Please check my role position and permissions.`)]})
        user.timeout(ms(`1second`),`${message.author.tag} | ${reason}`);
        return message.channel.send({embeds : [this.client.utils.embed().setDescription(`${client.emoji.tick} | SuccessFully **Unmuted** ${user.user.tag} executed by : ${message.author.tag}\n${client.emoji.arrow} Reason : ${reason}`)]});
    }
}
}
}