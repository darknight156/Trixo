import OrasCommand from "../../abstract/OrasCommand.js";
export default class Prefix extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "set-prefix";
        this.aliases = ["prefix", "setprefix"];
        this.cat = "settings";
        this.desc = "Helps getting a custom-prefix for a guild";
        this.vc = false;
        this.samevc = false;
        this.manage = false;
        this.dev = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.dispatcher = false;
        this.playing = false;
        this.vote = false;
        this.exec = async (message, args, prefix) => {
            if (!args[0])
                return message.reply({
                    content: `Current Prefix for the server Is: \`${prefix}\``,
                });
            if (!message.member.permissions.has("ManageGuild") &&
                !this.client.config.owners.includes(message.author.id))
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this command`)
                            .setTimestamp(),
                    ],
                });
            if (args[1])
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guild.id)
                            .setDescription(`${this.client.emoji.cross} **No whitespaces** are required in a prefix!`),
                    ],
                });
            if (args[0].length > 3)
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guild.id)
                            .setDescription(`${this.client.emoji.cross} Prefix's length must not be Greater than 3`),
                    ],
                });
            this.client.utils.updatePrefix(message.guild.id, args[0]);
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guild.id)
                        .setDescription(`${this.client.emoji.tick} Successfully **Updated** Guild's Prefix to: \`${args[0]}\``),
                ],
            });
        };
    }
}
//# sourceMappingURL=Prefix.js.map