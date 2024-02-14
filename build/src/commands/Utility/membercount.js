import OrasCommand from "../../abstract/OrasCommand.js";
export default class OrasLatency extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "membercount";
        this.cat = "utility";
        this.desc = "Shows the server membercount";
        this.aliases = ["membercount", "mc", "usercount"];
        this.exec = async (message, prefix, args) => {
            return message?.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setAuthor({
                            name: `${message.guild.name}`,
                            iconURL: message.guild.iconURL({ dynamic : true }),
        })
                    .setFooter({
                                        text: `Requested By: ${message.author.tag}`,
                        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
                                    })
                        .setDescription(`__**Total members**__ : **${message.guild.memberCount}**`),
                ],
            });
        };
    }
}
//# sourceMappingURL=Latency.js.map