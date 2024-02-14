import OrasCommand from "../../abstract/OrasCommand.js";
export default class About extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "about";
        this.desc = "Provides you with the information of the bot";
        this.usage = "about";
        this.aliases = [];
        this.cat = "info";
        this.exec = async (message, args, prefix) => {
            return message
                    .reply({
                    embeds: [
                        this.client.utils
                            .embed()
                            .setAuthor({
            name: `About Trixo`,
            iconURL: this.client.user.displayAvatarURL(),
          })
                            .setDescription(`<:boost_flora:1176138661373427732> Hey, It's **${client.user.username}** A Quality Music Bot With Breathtaking Features For Greater Experience While On Discord. **${client.user.username}** Is Making Music More Enhanced In Discord. Try **${client.user.username}** Now!\n\n**<:dev_trixo:1191730442521546852> Developers**\n**[DarkNighT](https://discord.com/users/1130505804009721886)**\n\n**<:owner_trixo:1191730460427034745> Owners**\n**[DarkNighT](https://discord.com/users/1130505804009721886)\n[Xtressy](https://discord.com/users/1126349436444999751)\n[Joker.xD](https://discord.com/users/1043412897247789058)**\n\n**<:supporter_trixo:1191731669745545327> Contributors**\n**[Soham](https://discord.com/users/)**`) 
                        .setThumbnail(this.client.user.displayAvatarURL({ dynamic : true }))
                        .setFooter({
                                text: `Thanks For Selecting ${this.client.user.username}`,
                                iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
                            }),
                    ],
                    components: [
                        this.client.utils.actionRow([
                            this.client.utils.button(`link`, `Invite Me`, null, null, `${this.client.config.botinvite}`, this.client.emoji.invite),
                            this.client.utils.button(`link`, `Invite Me`, null, null, `${this.client.config.botinvite}`, this.client.emoji.invite),
                            this.client.utils.button(`link`, `Premium`, null, null, `${this.client.config.server}`, this.client.emoji.premium),
                        ]),
                    ],
                })
        };
    }
}
//# sourceMappingURL=About.js.map