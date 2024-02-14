import OrasCommand from "../../abstract/OrasCommand.js";
export default class Pop extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "pop";
        this.aliases = [];
        this.cat = "filters";
        this.manage = false;
        this.vote = false;
        this.vc = true;
        this.desc = "Toggles pop filter to the player";
        this.usage = "pop";
        this.samevc = true;
        this.dispatcher = true;
        this.playing = true;
        this.exec = async (message, args, prefix, dispatcher) => {
            await dispatcher.player.setFilters({
                equalizer: [
                    { band: 0, gain: 0.65 },
                    { band: 1, gain: 0.45 },
                    { band: 2, gain: -0.45 },
                    { band: 3, gain: -0.65 },
                    { band: 4, gain: -0.35 },
                    { band: 5, gain: 0.45 },
                    { band: 6, gain: 0.55 },
                    { band: 7, gain: 0.6 },
                    { band: 8, gain: 0.6 },
                    { band: 9, gain: 0.6 },
                    { band: 10, gain: 0 },
                    { band: 11, gain: 0 },
                    { band: 12, gain: 0 },
                    { band: 13, gain: 0 },
                ],
            });
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setDescription(`${this.client.emoji.tick} Successfully **Applied Pop** filter to the player`),
                ],
            });
        };
    }
}
//# sourceMappingURL=Pop.js.map