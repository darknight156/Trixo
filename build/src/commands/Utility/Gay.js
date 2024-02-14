import OrasCommand from "../../abstract/OrasCommand.js";

export default class Gay extends OrasCommand {
 constructor(client) {
    super(client);
    this.name = "gay",
    this.cat = "utility",
    this.vote = true;
    this.premium = {
            guild: false,
            user: false,
        };
    this.aliases = [],
    this.exec = async (message, args, prefix) => {
      const user = 
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member;
      const ID = user.id;
  
      let rng = Math.floor(Math.random() * 100) + 1;
  
      let em = this.client.utils
                .premiumEmbed(message.guildId)
        .setAuthor({
                    name: `How Gay ?`,
                    iconURL: this.client.user.displayAvatarURL(),
                })
        .setDescription(`<@${ID}> is ` + rng + "% Gay🌈")
  
        return message.reply({
            embeds: [em],
        })
    }
  }
}