import OrasCommand from "../../abstract/OrasCommand.js";
export default class Say extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "say";
        this.aliases = [];
        this.cat = "sikey";
        this.dev = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.manage = false;
        this.exec = async (message, args, prefix) => {
            let msg = args.join(" ");
            if (!msg)
                return message.reply({
                    content: `${this.client.emoji.cross} Provide me some message to say!`,
                });
            await message.delete().catch((e) => { });
            await message.channel.send({
                content: `${msg}`,
                allowedMentions: { repliedUser: false, parse: ["users"] },
            });
            return;
        };
    }
}
//# sourceMappingURL=Say.js.map