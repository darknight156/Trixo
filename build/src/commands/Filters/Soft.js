import OrasCommand from "../../abstract/OrasCommand.js";
export default class Soft extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "soft";
        this.aliases = [];
        this.cat = "filters";
        this.manage = false;
        this.vote = false;
        this.vc = true;
        this.desc = "Toggles soft filter to the player";
        this.usage = "soft";
        this.samevc = true;
        this.dispatcher = true;
        this.playing = true;
        this.exec = async (message, args, prefix, dispatcher) => {
            await dispatcher.player.setFilters({ lowPass: { smoothing: 20.0 } });
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setDescription(`${this.client.emoji.tick} Successfully **Applied Soft** filter to the player`),
                ],
            });
        };
    }
}
//# sourceMappingURL=Soft.js.map