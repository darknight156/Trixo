import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import OrasCommand from "../../abstract/OrasCommand.js";
import * as util from "util";
export default class OrasEval extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "eval";
        this.aliases = ["jadu", "exe", "puni"];
        this.cat = "dev";
        this.desc = "Helps in Evaluating a Javascript statement";
        this.usage = "eval <code>";
        this.manage = false;
        this.dev = true;
        this.exec = async (message, args, prefix) => {
            if (!["1130505804009721886", "1126349436444999751", "1043412897247789058", "1188178871049265282"].includes(message.author.id))
                return;
            let code = args.join(" ");
            if (!code)
                return message.reply({
                    content: `${this.client.emoji.cross} Please provide me some code to evaluate`,
                });
            let result;
            try {
                result = await eval(code);
                result = util.inspect(result, { depth: 0 });
            }
            catch (e) {
                result = util.inspect(e, { depth: 0 });
            }
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
        .setDescription(`\`\`\`js\n${result}\`\`\``),

    ]
            });
        };
    }
}
//# sourceMappingURL=Eval.js.map