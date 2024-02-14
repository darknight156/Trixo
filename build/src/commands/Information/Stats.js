import OrasCommand from "../../abstract/OrasCommand.js";
import { cpu } from "systeminformation";
import { cpus, totalmem } from "node:os";
export default class Stats extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "stats";
        this.aliases = ["st", "stat", "botinfo", "bi"];
        this.desc = "Informs you about the current statitics of the bot";
        this.usage = "stats";
        this.cat = "info";
        this.exec = async (message, args, prefix) => {
            let em = this.client.utils
                .premiumEmbed(message.guildId)
                .setAuthor({
                    name: `Stats`,
                    iconURL: this.client.user.displayAvatarURL(),
                })
                .setDescription(`The __Basic Stats__ Page of the Trixo`)
                .addFields([
                {
                    name: `<:info_trixo:1191724035663478824> __Basic Information__`,
                    value: `\`\`\`js
• Bot Tag : ${this.client.user.tag}\n• Servers : ${await this.client.cluster
                        .broadcastEval((x) => x.guilds.cache.size)
                        .then((result) => result.reduce((a, b) => a + b, 0))}\n• Users : ${await this.client.cluster
                        .broadcastEval((c) => c.guilds.cache
                        .filter((x) => x.available)
                        .reduce((a, g) => a + g.memberCount, 0))
                        .then((r) => r.reduce((acc, memberCount) => acc + memberCount, 0))}\n• Channels : ${await this.client.cluster
                        .broadcastEval((x) => x.channels.cache.size)
                        .then((r) => r.reduce((a, b) => a + b, 0))}\n• Uptime : ${this.client.utils.humanize(message.client.uptime)}\n• Latency : ${this.client.ws.ping} ms
\`\`\``,
                },
            ])
                .setThumbnail(this.client.user.displayAvatarURL());
            let cpuUsage;
            let cpuFree;
            const lol = Object.values(cpus()[0].times).reduce((a, b) => a + b, 0) *
                100;
            const lol2 = (process.cpuUsage().user + process.cpuUsage().system) * 1000;
            cpuUsage = (lol2 / lol).toFixed(2);
            cpuFree = (100 - cpuUsage).toFixed(2);
            let b1 = this.client.utils.button(`custom_id`, `Basic Information`, 4, `gen`);
            let b2 = this.client.utils.button(`custom_id`, `System Information`, 3, `sys`);
            let b3 = this.client.utils.button(`custom_id`, `Team Information`, 3, `team`);
            let row = this.client.utils.actionRow([b1.setDisabled(true), b2, b3]);
            let msg = await message.reply({
                embeds: [em],
                components: [row],
            });
            let guild = await this.client.guilds
                .fetch(this.client.config.supportId)
                .catch(() => { });
            let collector = await msg.createMessageComponentCollector({
                filter: (b) => {
                    if (b.user.id === message.author.id)
                        return true;
                    else
                        return b.reply({
                            content: `${this.client.emoji.cross} You are not the command requester`,
                            ephemeral: true,
                        });
                },
                time: 100000 * 7,
            });
            collector.on("collect", async (interaction) => {
                if (interaction.isButton()) {
                    if (interaction.customId === `team`) {
                        return interaction
                            .update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(message.guildId)
                                    .setAuthor({
                                    name: `Stats`,
                                    iconURL: this.client.user.displayAvatarURL(),
                                })
                                    .setDescription(`The __Team Stats__ Page of the Trixo`)
                                    .addFields([
                                    {
                                        name: `<:team_trixo:1191751979937054820> __Team Information__`,
                                        value: `> <:bot_developer:1190560954845511722> **Developer**: [**DarkNighT**](https://discord.com/users/1130505804009721886)
                                        > <a:developer:1190560992644583476> **Co-Developer**: [**Xtressy**](https://discord.com/users/1126349436444999751) | [**Joker.Xd**](https://discord.com/users/1043412897247789058)
                                        > <:owner_flora:1175792119525421127> **Owners**: [**DarkNighT**](https://discord.com/users/1130505804009721886) | [**Xtressy**](https://discord.com/users/1126349436444999751)`,
                                    },
                                    
                                ])
                                    .setThumbnail(this.client.user.displayAvatarURL()),
                            ],
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils
                                        .button(`custom_id`, `Basic Information`, 3, `gen`),
                                    this.client.utils
                                    .button(`custom_id`, `System Information`, 3, `sys`),
                                    this.client.utils.button(`custom_id`, `Team Information`, 4, `team`)
                                    .setDisabled(true),
                                ]),
                            ],
                        })
                            .catch(() => { });
                    }
                    else if (interaction.customId === `gen`) {
                        await interaction.deferUpdate();
                        return await msg
                            .edit({
                            embeds: [em],
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`custom_id`, `Basic Information`, 4, `gen`)
                                    .setDisabled(true),
                                    this.client.utils
                                        .button(`custom_id`, `System Information`, 3, `sys`),
                                    this.client.utils.button(`custom_id`, `Team Information`, 3, `team`),
                                ]),
                            ],
                        })
                            .catch(() => { });
                    }
                    else if (interaction.customId === `sys`) {
                        await interaction.deferUpdate();
                        return await msg
                            .edit({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(message.guildId)
                                    .setAuthor({
                                    name: `Stats`,
                                    iconURL: this.client.user.displayAvatarURL(),
                                })
                                .setDescription(`The __System Stats__ Page of the Trixo`)
                                    .addFields([
                                    {
                                        name: `<:settings_trixo:1191734707474415737> __System Information__`,
                                        value: `\`\`\`js
• Discord.js : v14.9.0\n• Node js : v20.11.0\`\`\`\n\n\`\`\`js
• CPU : ${cpus()[0].model}\n• Arch : x64\n• Platform : Linux\n• Cpu Cores : ${(await cpu()).cores}\n• Cpu Speed : ${cpus()[0].speed}\n• Cpu Usage : ${cpuUsage}% / ${cpuFree}\`\`\`\n\n\`\`\`js
• Total Memory : ${(totalmem() / 1024 / 1024).toFixed(2)}\n• Memory Used : ${(process.memoryUsage().heapUsed /
                                        1024 /
                                        1024).toFixed(2)}\n• Memory Free : ${(totalmem() / 1024 / 1024 -
                                        process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\`\`\``,
                                    },
                                ])
                                    .setThumbnail(this.client.user.displayAvatarURL()),
                            ],
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`custom_id`, `Basic Information`, 3, `gen`),
                                    this.client.utils.button(`custom_id`, `System Information`, 4, `sys`)
                                    .setDisabled(true),
                                    this.client.utils
                                        .button(`custom_id`, `Team Information`, 3, `team`),
                                ]),
                            ],
                        })
                            .catch(() => { });
                    }
                }
            });
            collector.on("end", async () => {
                if (!msg)
                    return;
                else
                    return await msg.edit({
                        components: [
                            this.client.utils.actionRow([
                                b1.setDisabled(false),
                                b2.setDisabled(false),
                                b3.setDisabled(false),
                            ]),
                        ],
                    });
            });
        };
    }
}
function checkMemPresence(member) {
    try {
        if (member.presence?.status === `online`)
            return "<:online:1123087833788330066>";
        else if (member.presence?.status === `idle`)
            return "<:idle:1123087869460885614>";
        else if (member.presence?.status === `offline`)
            return "<:Offline:1123088263503159327>";
        else if (member.presence?.status === `dnd`)
            return "<:dnd:1123087852834664468>";
        else
            return "<:Offline:1123088263503159327>";
    }
    catch (e) {
        console.log(e);
        return "<:Offline:1123088263503159327>";
    }
}
//# sourceMappingURL=Stats.js.map