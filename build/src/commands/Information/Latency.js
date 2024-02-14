import OrasCommand from "../../abstract/OrasCommand.js";
export default class OrasLatency extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "ping";
        this.cat = "info";
        this.desc = "Informs you about the bot's latency";
        this.aliases = ["ping", "pong"];
        this.exec = async (message, prefix, args) => {
            return message?.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`<:ss:1191746366381248563> Uptime`)
                        .setAuthor({
                            name: `Ping & Uptime`,
                            iconURL: this.client.user.displayAvatarURL(),
        })
                    .setFooter({
                                        text: `Requested By: ${message.author.tag}`,
                        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
                                    })
                        .setDescription(`> <:arrow_flora:1175442088045854791> <t:${Math.round(this.client.readyTimestamp / 1000)}:R>\n<:pp:1191745703588937868> **Ping**\n> <:arrow_flora:1175442088045854791> \`${this.client.ws.ping}\`ms`),
                ],
            });
        };
    }
}
//# sourceMappingURL=Latency.js.map