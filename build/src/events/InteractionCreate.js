import { addFavs, removeFavs } from "../wrapper/db/premium.js";
import OrasEvent from "../abstract/OrasEvent.js";
import Topgg from "@top-gg/sdk";
import OrasConfig from "../setting/Config.js";
const Config = new OrasConfig();
const voteApi = new Topgg.Api(Config.voteApi);
export default class OrasInteraction extends OrasEvent {
    constructor(client) {
        super(client);
        this.name = "interactionCreate";
        this.run = async (interaction) => {
            if (interaction.isButton()) {
                if (interaction.customId === `dev_del`) {
                    return await interaction.message.delete().catch(() => { });
                }
                if (interaction.customId === `oras_classic_mode`) {
                    if (this.client.utils.checkServerPrem(interaction.guildId) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guildId) ===
                            false)
                        return interaction.update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)
                                    .setDescription(`${this.client.emoji.cross} This guild is no more a [Premium Guild](${this.client.config.voteUrl}). Visit [Support Server](${this.client.config.server}) to claim Premium`),
                            ],
                            components: [],
                        });
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.permissions.has("ManageGuild") &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        this.client.utils.checkActivator(interaction.guildId) !==
                            interaction.user.id)
                        return interaction.reply({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)

                                    .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this Interaction!`),
                            ],
                            ephemeral: true,
                        });
                    this.client.utils.updatePlayerMode(interaction.guildId, "oras-classic");
                    return interaction.update({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guildId)

                                .setDescription(`${this.client.emoji.tick} Successfully **Updated** the Player to: \`Oras Classic Style\``)
                                .setTimestamp(),
                        ],
                        components: [],
                    });
                }
                if (interaction.customId === `oras_spotify_mode`) {
                    if (this.client.utils.checkServerPrem(interaction.guildId) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guildId) ===
                            false)
                        return interaction.update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)
                                    .setDescription(`${this.client.emoji.cross} This guild is no more a [Premium Guild](${this.client.config.voteUrl}). Visit [Support Server](${this.client.config.server}) to claim Premium`),
                            ],
                            components: [],
                        });
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.permissions.has("ManageGuild") &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        this.client.utils.checkActivator(interaction.guildId) !==
                            interaction.user.id)
                        return interaction.reply({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)

                                    .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this Interaction!`),
                            ],
                            ephemeral: true,
                        });
                    this.client.utils.updatePlayerMode(interaction.guildId, "oras-spotify");
                    return interaction.update({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guildId)

                                .setDescription(`${this.client.emoji.tick} Successfully **Updated** the Player to: \`Oras x Spotify Mode\``)
                                .setTimestamp(),
                        ],
                        components: [],
                    });
                }
                if (interaction.customId === `oras_simple_mode`) {
                    if (this.client.utils.checkServerPrem(interaction.guildId) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guildId) ===
                            false)
                        return interaction.update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)
                                    .setDescription(`${this.client.emoji.cross} This guild is no more a [Premium Guild](${this.client.config.voteUrl}). Visit [Support Server](${this.client.config.server}) to claim Premium`),
                            ],
                            components: [],
                        });
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.permissions.has("ManageGuild") &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        this.client.utils.checkActivator(interaction.guildId) !==
                            interaction.user.id)
                        return interaction.reply({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)

                                    .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this Interaction!`),
                            ],
                            ephemeral: true,
                        });
                    this.client.utils.updatePlayerMode(interaction.guildId, "oras-simple");
                    return interaction.update({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guildId)

                                .setDescription(`${this.client.emoji.tick} Successfully **Updated** the Player to: \`Oras Simple Style\``)
                                .setTimestamp(),
                        ],
                        components: [],
                    });
                }
                if (interaction.customId === `oras_special_mode`) {
                    if (this.client.utils.checkServerPrem(interaction.guildId) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guildId) ===
                            false)
                        return interaction.update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)
                                    .setDescription(`${this.client.emoji.cross} This guild is no more a [Premium Guild](${this.client.config.voteUrl}). Visit [Support Server](${this.client.config.server}) to claim Premium`),
                            ],
                            components: [],
                        });
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.permissions.has("ManageGuild") &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        this.client.utils.checkActivator(interaction.guildId) !==
                            interaction.user.id)
                        return interaction.reply({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)

                                    .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this Interaction!`),
                            ],
                            ephemeral: true,
                        });
                    this.client.utils.updatePlayerMode(interaction.guildId, "oras-special");
                    return interaction.update({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guildId)

                                .setDescription(`${this.client.emoji.tick} Successfully **Updated** the Player to: \`Oras Special Style\``)
                                .setTimestamp(),
                        ],
                        components: [],
                    });
                }
                if (interaction.customId === `oras_no_mode`) {
                    if (this.client.utils.checkServerPrem(interaction.guildId) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guildId) ===
                            false)
                        return interaction.update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)
                                    .setDescription(`${this.client.emoji.cross} This guild is no more a [Premium Guild](${this.client.config.voteUrl}). Visit [Support Server](${this.client.config.server}) to claim Premium`),
                            ],
                            components: [],
                        });
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.permissions.has("ManageGuild") &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        this.client.utils.checkActivator(interaction.guildId) !==
                            interaction.user.id)
                        return interaction.reply({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)

                                    .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this Interaction!`),
                            ],
                            ephemeral: true,
                        });
                    this.client.utils.updatePlayerMode(interaction.guildId, "oras-no");
                    return interaction.update({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guildId)

                                .setDescription(`${this.client.emoji.tick} Successfully **Updated** the Player to: \`Oras No Buttons Mode\``)
                                .setTimestamp(),
                        ],
                        components: [],
                    });
                }
                if (interaction.customId === `oras_old_mode`) {
                    if (this.client.utils.checkServerPrem(interaction.guildId) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guildId) ===
                            false)
                        return interaction.update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)
                                    .setDescription(`${this.client.emoji.cross} This guild is no more a [Premium Guild](${this.client.config.voteUrl}). Visit [Support Server](${this.client.config.server}) to claim Premium`),
                            ],
                            components: [],
                        });
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.permissions.has("ManageGuild") &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        this.client.utils.checkActivator(interaction.guildId) !==
                            interaction.user.id)
                        return interaction.reply({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guildId)

                                    .setDescription(`${this.client.emoji.cross} You require **Manage Guild** permissions to use this Interaction!`),
                            ],
                            ephemeral: true,
                        });
                    this.client.utils.updatePlayerMode(interaction.guildId, "oras-old");
                    return interaction.update({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guildId)

                                .setDescription(`${this.client.emoji.tick} Successfully **Updated** the Player to: \`Oras Old School Style\``)
                                .setTimestamp(),
                        ],
                        components: [],
                    });
                }
                if (interaction.customId === `oras_dj_previous`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    if (dispatcher.previous === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no previous song in the queue`,
                            ephemeral: true,
                        });
                    dispatcher.queue.unshift(dispatcher.previous);
                    await interaction.deferUpdate();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **Shifted** and Started playing **Previous Track**`)
                                .setTimestamp()
                                .setTitle(`Shifted Track`)
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch((e) => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_stop`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    dispatcher.destroy();
                    await interaction.deferUpdate();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **Stopped** the Player and **Resetted** the Queue`)
                                .setTitle(`Stopped Player`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_pause`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    let b1 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_previous`, null, this.client.emoji.setup.previous);
                    let b2 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_stop`, null, this.client.emoji.setup.stop);
                    let b3 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_pause`, null, dispatcher.player.paused
                        ? this.client.emoji.setup.pause
                        : this.client.emoji.setup.resume);
                    let b4 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_loop`, null, this.client.emoji.setup.loop);
                    let b5 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_skip`, null, this.client.emoji.setup.skip);
                    let b6 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_volLow`, null, this.client.emoji.setup.volLow);
                    let b7 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_fav`, null, this.client.emoji.setup.fav);
                    let b8 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_shuffle`, null, this.client.emoji.setup.shuffle);
                    let b9 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_autoplay`, null, this.client.emoji.setup.autoplay);
                    let b10 = this.client.utils.button(`custom_id`, null, 2, `oras_dj_volHigh`, null, this.client.emoji.setup.volHigh);
                    let row = this.client.utils.actionRow([b1, b2, b3, b4, b5]);
                    let row2 = this.client.utils.actionRow([b6, b7, b8, b9, b10]);
                    let opt1 = this.client.utils.menuOption(`Reset Filters`, null, `Resets all the filters of the player`, `oras_dj_filter_reset`);
                    let opt2 = this.client.utils.menuOption(`8D`, null, `Sets Up 8d filter to the player`, `oras_dj_filter_8d`);
                    let opt3 = this.client.utils.menuOption(`BassBoost`, null, `Sets bassboost filter to the player`, `oras_dj_filter_bassboost`);
                    let opt4 = this.client.utils.menuOption(`NightCore`, null, `Sets NightCore filter to the player`, `oras_dj_filter_nightcore`);
                    let opt5 = this.client.utils.menuOption(`Vaporwave`, null, `Sets Vaporwave filter to the player`, `oras_dj_filter_vibrato`);
                    let options = [opt1, opt2, opt3, opt4, opt5];
                    let menu = this.client.utils.menu(`Choose filters`, `help-op`, options);
                    let ro = this.client.utils.actionRow([menu]);
                    let content = dispatcher.player.paused ? `Resumed` : `Paused`;
                    await interaction.update({
                        components: [ro, row, row2],
                    });
                    dispatcher.player.setPaused(!dispatcher.player.paused);
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **${content}** the Player`)
                                .setTitle(`${content} Player`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_loop`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    let loop;
                    if (dispatcher.repeat === `off`) {
                        dispatcher.repeat = "one";
                        loop = "Track";
                    }
                    else if (dispatcher.repeat === "one") {
                        dispatcher.repeat = "all";
                        loop = "Queue";
                    }
                    else if (dispatcher.repeat === "all") {
                        dispatcher.repeat = "off";
                        loop = "off";
                    }
                    await interaction.deferUpdate();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Loop Mode of the Player has been changed to **${loop}**`)
                                .setTitle(`Loop Mode Affected`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_skip`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    await interaction.deferUpdate();
                    dispatcher.player.stopTrack();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **Skipped** the current track`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_volLow`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    let vol = dispatcher.player.filters.volume * 100;
                    let volume = vol - 10;
                    if (volume <= 0)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} Cannot Lower down the Volume Anymore`,
                            ephemeral: true,
                        });
                    dispatcher.player.setVolume(Math.round(volume / 100));
                    await interaction.deferUpdate();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **Lowered** the volume to : **${volume}%**`)
                                .setTitle(`Volume Lower Down`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_fav`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    if (this.client.utils.findFavs(interaction.user.id, dispatcher.current) === true) {
                        removeFavs(interaction.user.id, dispatcher.current);
                        await interaction.deferUpdate();
                        return interaction.channel
                            .send({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guild.id)
                                    .setDescription(`${this.client.emoji.cross} Successfully **Removed** [${dispatcher.current.info.title.substring(0, 35)}](${this.client.config.voteUrl}) to **Your favourites**`)
                                    .setTitle(`Removed From Favs`)
                                    .setFooter({
                                    text: `Performed By: ${interaction.user.tag}`,
                                    iconURL: interaction.user.displayAvatarURL({
                                        dynamic: true,
                                    }),
                                }),
                            ],
                        })
                            .then((x) => {
                            setTimeout(() => {
                                x.delete().catch(() => { });
                            }, 5000);
                        });
                    }
                    else {
                        addFavs(interaction.user.id, dispatcher.current);
                        await interaction.deferUpdate();
                        return interaction.channel
                            .send({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guild.id)
                                    .setDescription(`${this.client.emoji.tick} Successfully **Added** [${dispatcher.current.info.title.substring(0, 35)}](${this.client.config.voteUrl}) to **Your Favoruites**`)
                                    .setTitle(`Added To Favs`)
                                    .setFooter({
                                    text: `Performed By: ${interaction.user.tag}`,
                                    iconURL: interaction.user.displayAvatarURL({
                                        dynamic: true,
                                    }),
                                }),
                            ],
                        })
                            .then((x) => {
                            setTimeout(() => {
                                x.delete().catch(() => { });
                            }, 5000);
                        });
                    }
                }
                if (interaction.customId === `oras_dj_shuffle`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    if (dispatcher.queue.length === 0)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There are **No Songs in the Queue** to be shuffled!`,
                            ephemeral: true,
                        });
                    dispatcher.queue.sort(() => Math.random() - 0.5);
                    await interaction.deferUpdate();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **Shuffled** the Queue of the Player`)
                                .setTitle(`Shuffled`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_dj_autoplay`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    let run = this.client.utils.updateAutoPlay(interaction.guild.id);
                    await interaction.deferUpdate();
                    if (run === false)
                        return interaction.channel
                            .send({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guild.id)
                                    .setDescription(`${this.client.emoji.cross} Successfully **Disabled** the **Autoplay** mode of the player`)
                                    .setTitle(`Autoplay Updated`)
                                    .setTimestamp()
                                    .setFooter({
                                    text: `Performed By: ${interaction.user.tag}`,
                                    iconURL: interaction.user.displayAvatarURL({
                                        dynamic: true,
                                    }),
                                }),
                            ],
                        })
                            .then((x) => {
                            setTimeout(() => {
                                x.delete().catch(() => { });
                            }, 5000);
                        });
                    else
                        return interaction.channel
                            .send({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(interaction.guild.id)
                                    .setDescription(`${this.client.emoji.tick} Succesfully **Enabled** the **Autoplay** mode of the player`)
                                    .setTitle(`Autoplay Updated`)
                                    .setTimestamp()
                                    .setFooter({
                                    text: `Performed By: ${interaction.user.tag}`,
                                    iconURL: interaction.user.displayAvatarURL({
                                        dynamic: true,
                                    }),
                                }),
                            ],
                        })
                            .then((x) => {
                            setTimeout(() => {
                                x.delete().catch(() => { });
                            }, 5000);
                        });
                }
                if (interaction.customId === `oras_dj_volHigh`) {
                    if (this.client.utils.checkServerPrem(interaction.guild.id) === false &&
                        this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                            false) {
                        this.client.utils.deleteDj(interaction.guild.id);
                        interaction
                            .reply({
                            content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                            ephemeral: true,
                        })
                            .then((x) => {
                            setTimeout(() => {
                                interaction.message.delete().catch((e) => { });
                            }, 10000);
                        });
                        return;
                    }
                    let voted = await voteApi.hasVoted(interaction.user.id);
                    if (!voted &&
                        !this.client.config.owners.includes(interaction.user.id) &&
                        !this.client.utils.checkUserPrem(interaction.user.id))
                        return interaction.reply({
                            content: `You need to Vote Me to use this Interaction!`,
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                ]),
                            ],
                            ephemeral: true,
                        });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel &&
                        interaction.member.voice.channelId !==
                            interaction.guild.members.me.voice.channelId)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} No Music Session is currently there!`,
                            ephemeral: true,
                        });
                    if (dispatcher.player.track === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} I am not playing anything currently`,
                            ephemeral: true,
                        });
                    let vol = dispatcher.player.filters.volume * 100;
                    let volume = vol + 10;
                    if (volume >= 200)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} Volume **Cannot be Increased** anymore`,
                            ephemeral: true,
                        });
                    await dispatcher.player.setVolume(volume / 100);
                    await interaction.deferUpdate();
                    return interaction.channel
                        .send({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(interaction.guild.id)
                                .setDescription(`${this.client.emoji.tick} Successfully **Increased** the Volume of the Player to: **${volume}%**`)
                                .setTitle(`Volume Increased`)
                                .setTimestamp()
                                .setFooter({
                                text: `Performed By: ${interaction.user.tag}`,
                                iconURL: interaction.user.displayAvatarURL({
                                    dynamic: true,
                                }),
                            }),
                        ],
                    })
                        .then((x) => {
                        setTimeout(() => {
                            x.delete().catch(() => { });
                        }, 5000);
                    });
                }
                if (interaction.customId === `oras_skip`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    dispatcher.player.stopTrack();
                    return await interaction.deferUpdate();
                }
                if (interaction.customId === `oras_previous`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    if (!dispatcher.previous || dispatcher.previous === null)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no previous song in the queue!`,
                            ephemeral: true,
                        });
                    dispatcher.queue.unshift(dispatcher.previous);
                    return await interaction.deferUpdate();
                }
                if (interaction.customId === `oras_stop`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    await interaction.deferUpdate();
                    dispatcher.destroy();
                    return;
                }
                if (interaction.customId === `oras_loop`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    let loop = "";
                    if (dispatcher.repeat === `off`) {
                        loop = "Track";
                        dispatcher.repeat = "one";
                    }
                    else if (dispatcher.repeat === "one") {
                        loop = "Queue";
                        dispatcher.repeat = "all";
                    }
                    else if (dispatcher.repeat === "all") {
                        loop = "Off";
                        dispatcher.repeat = "off";
                    }
                    return interaction.reply({
                        content: `${this.client.emoji.setup.loop} Enabled Looping Mode to: \`${loop}\``,
                        ephemeral: true,
                    });
                }
                if (interaction.customId === `oras_pause`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    let setting = this.client.utils.getPlayerMode(interaction.guildId);
                    if (setting === `oras-old`) {
                        let b1 = this.client.utils.button(`custom_id`, `Stop`, 4, `oras_stop`);
                        let b2 = this.client.utils.button(`custom_id`, `${dispatcher.player.paused ? `Pause` : `Resume`}`, 3, `oras_pause`);
                        let b3 = this.client.utils.button(`custom_id`, `Loop`, 1, `oras_loop`);
                        let b4 = this.client.utils.button(`custom_id`, `Previous`, 2, `oras_previous`);
                        let b5 = this.client.utils.button(`custom_id`, `Skip`, 2, `oras_skip`);
                        let row = this.client.utils.actionRow([b1, b2, b3, b4, b5]);
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        await interaction.update({
                            components: [row]
                        });
                        return;
                    }
                    if (setting === `oras-classic`) {
                        let b1 = this.client.utils.button(`custom_id`, `Stop`, 4, `oras_stop`);
                        let b2 = this.client.utils.button(`custom_id`, `${dispatcher.player.paused ? `Pause` : `Resume`}`, 3, `oras_pause`);
                        let b3 = this.client.utils.button(`custom_id`, `Loop`, 1, `oras_loop`);
                        let b4 = this.client.utils.button(`custom_id`, `Previous`, 2, `oras_previous`);
                        let b5 = this.client.utils.button(`custom_id`, `Skip`, 2, `oras_skip`);
                        let row = this.client.utils.actionRow([b1, b2, b3, b4, b5]);
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        await interaction.update({
                            components: [row]
                        });
                        return;
                    }
                    if (setting === `oras-no`) {
                        let opt1 = this.client.utils.menuOption(`Reset Filters`, this.client.emoji.noButtons.filters, `Resets all the filters of the player`, `oras_filter_reset`);
                        let opt2 = this.client.utils.menuOption(`8D`, this.client.emoji.noButtons.filters, `Sets Up 8d filter to the player`, `oras_filter_8d`);
                        let opt3 = this.client.utils.menuOption(`BassBoost`, this.client.emoji.noButtons.filters, `Sets bassboost filter to the player`, `oras_filter_bassboost`);
                        let opt4 = this.client.utils.menuOption(`NightCore`, this.client.emoji.noButtons.filters, `Sets NightCore filter to the player`, `oras_filter_nightcore`);
                        let opt5 = this.client.utils.menuOption(`Vaporwave`, this.client.emoji.noButtons.filters, `Sets Vaporwave filter to the player`, `oras_filter_vibrato`);
                        let options = [opt1, opt2, opt3, opt4, opt5];
                        let menu = this.client.utils.menu(`Choose filters`, `no-buttons`, options);
                        let row = this.client.utils.actionRow([menu]);
                        await interaction.update({
                            components: [row]
                        });
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        return;
                    }
                    if (setting === `oras-special`) {
                        let b1 = this.client.utils.button(`custom_id`, null, 2, `oras_previous`, null, this.client.emoji.special.previous);
                        let b2 = this.client.utils.button(`custom_id`, null, 2, `oras_shuffle`, null, this.client.emoji.special.shuffle);
                        let b3 = this.client.utils.button(`custom_id`, null, 2, `oras_pause`, null, dispatcher.player.paused ? this.client.emoji.special.pause : this.client.emoji.special.resume);
                        let b4 = this.client.utils.button(`custom_id`, null, 2, `oras_loop`, null, this.client.emoji.special.loop);
                        let b5 = this.client.utils.button(`custom_id`, null, 2, `oras_skip`, null, this.client.emoji.special.skip);
                        let b6 = this.client.utils.button(`custom_id`, null, 2, `oras_volLow`, null, this.client.emoji.special.volLow);
                        let b7 = this.client.utils.button(`custom_id`, null, 2, `oras_backward`, null, this.client.emoji.special.backward);
                        let b8 = this.client.utils.button(`custom_id`, null, 2, `oras_stop`, null, this.client.emoji.special.stop);
                        let b9 = this.client.utils.button(`custom_id`, null, 2, `oras_forward`, null, this.client.emoji.special.forward);
                        let b10 = this.client.utils.button(`custom_id`, null, 2, `oras_volHigh`, null, this.client.emoji.special.volHigh);
                        let row1 = this.client.utils.actionRow([b1, b2, b3, b4, b5]);
                        let row2 = this.client.utils.actionRow([b6, b7, b8, b9, b10]);
                        await interaction.update({
                            components: [row1, row2]
                        });
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        return;
                    }
                    if (setting === `oras-simple`) {
                        let b1 = this.client.utils.button(`custom_id`, null, 3, `oras_stop`, null, this.client.emoji.simple.stop);
                        let b2 = this.client.utils.button(`custom_id`, null, 3, `oras_previous`, null, this.client.emoji.simple.previous);
                        let b3 = this.client.utils.button(`custom_id`, null, 1, `oras_pause`, null, dispatcher.player.paused ? this.client.emoji.simple.pause : this.client.emoji.simple.resume);
                        let b4 = this.client.utils.button(`custom_id`, null, 2, `oras_skip`, null, this.client.emoji.simple.skip);
                        let b5 = this.client.utils.button(`custom_id`, null, 3, `oras_loop`, null, this.client.emoji.simple.loop);
                        let row2 = this.client.utils.actionRow([b1, b2, b3, b4, b5]);
                        await interaction.update({
                            components: [row2]
                        });
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        return;
                    }
                    if (setting === `oras-spotify`) {
                        let opt1 = this.client.utils.menuOption(`Reset Filters`, this.client.emoji.spotify.filters, `Resets all the filters of the player`, `oras_filter_reset`);
                        let opt2 = this.client.utils.menuOption(`8D`, this.client.emoji.spotify.filters, `Sets Up 8d filter to the player`, `oras_filter_8d`);
                        let opt3 = this.client.utils.menuOption(`BassBoost`, this.client.emoji.spotify.filters, `Sets bassboost filter to the player`, `oras_filter_bassboost`);
                        let opt4 = this.client.utils.menuOption(`NightCore`, this.client.emoji.spotify.filters, `Sets NightCore filter to the player`, `oras_filter_nightcore`);
                        let opt5 = this.client.utils.menuOption(`Vaporwave`, this.client.emoji.spotify.filters, `Sets Vaporwave filter to the player`, `oras_filter_vibrato`);
                        let options = [opt1, opt2, opt3, opt4, opt5];
                        let menu = this.client.utils.menu(`Choose filters`, `help-op`, options);
                        let row1 = this.client.utils.actionRow([menu]);
                        let b1 = this.client.utils.button(`custom_id`, null, 3, `oras_previous`, null, this.client.emoji.spotify.previous);
                        let b2 = this.client.utils.button(`custom_id`, null, 3, `oras_shuffle`, null, this.client.emoji.spotify.shuffle);
                        let b3 = this.client.utils.button(`custom_id`, null, 3, `oras_pause`, null, dispatcher.player.paused ? this.client.emoji.spotify.pause : this.client.emoji.spotify.resume);
                        let b4 = this.client.utils.button(`custom_id`, null, 3, `oras_loop`, null, this.client.emoji.spotify.loop);
                        let b5 = this.client.utils.button(`custom_id`, null, 3, `oras_skip`, null, this.client.emoji.spotify.skip);
                        let b6 = this.client.utils.button(`custom_id`, null, 3, `oras_volLow`, null, this.client.emoji.spotify.volLow);
                        let b7 = this.client.utils.button(`custom_id`, null, 3, `oras_backward`, null, this.client.emoji.spotify.backward);
                        let b8 = this.client.utils.button(`custom_id`, null, 3, `oras_stop`, null, this.client.emoji.spotify.stop);
                        let b9 = this.client.utils.button(`custom_id`, null, 3, `oras_forward`, null, this.client.emoji.spotify.forward);
                        let b10 = this.client.utils.button(`custom_id`, null, 3, `oras_volHigh`, null, this.client.emoji.spotify.volHigh);
                        let row2 = this.client.utils.actionRow([b1, b2, b3, b4, b5]);
                        let row3 = this.client.utils.actionRow([b6, b7, b8, b9, b10]);
                        await interaction.update({
                            components: [row1, row2, row3]
                        });
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        return;
                    }
                    else {
                        this.client.utils.updatePlayerMode(this.guild.id, "oras-simple");
                        let opt1 = this.client.utils.menuOption(`Reset Filters`, this.client.emoji.simple.filters, `Resets all the filters of the player`, `oras_filter_reset`);
                        let opt2 = this.client.utils.menuOption(`8D`, this.client.emoji.simple.filters, `Sets Up 8d filter to the player`, `oras_filter_8d`);
                        let opt3 = this.client.utils.menuOption(`BassBoost`, this.client.emoji.simple.filters, `Sets bassboost filter to the player`, `oras_filter_bassboost`);
                        let opt4 = this.client.utils.menuOption(`NightCore`, this.client.emoji.simple.filters, `Sets NightCore filter to the player`, `oras_filter_nightcore`);
                        let opt5 = this.client.utils.menuOption(`Vaporwave`, this.client.emoji.simple.filters, `Sets Vaporwave filter to the player`, `oras_filter_vibrato`);
                        let options = [opt1, opt2, opt3, opt4, opt5];
                        let menu = this.client.utils.menu(`Choose filters`, `help-op`, options);
                        let row1 = this.client.utils.actionRow([menu]);
                        let b1 = this.client.utils.button(`custom_id`, null, 2, `oras_pause`, null, dispatcher.player.paused ? this.client.emoji.simple.pause : this.client.emoji.simple.resume);
                        let b2 = this.client.utils.button(`custom_id`, null, 2, `oras_skip`, null, this.client.emoji.simple.skip);
                        let b3 = this.client.utils.button(`custom_id`, null, 2, `oras_loop`, null, this.client.emoji.simple.loop);
                        let b4 = this.client.utils.button(`custom_id`, null, 2, `oras_stop`, null, this.client.emoji.simple.stop);
                        let row2 = this.client.utils.actionRow([b1, b2, b3, b4]);
                        await interaction.update({
                            components: [row1, row2]
                        });
                        await dispatcher.player.setPaused(!dispatcher.player.paused);
                        return;
                    }
                }
                if (interaction.customId === `oras_fav`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    if (this.client.utils.findFavs(interaction.user.id, dispatcher.current) === false) {
                        addFavs(interaction.user.id, dispatcher.current);
                        return interaction.reply({
                            content: `${this.client.emoji.tick} Successfully **Added** *${dispatcher.current.info.title.substring(0, 40)}* ${this.client.config.voteUrl} to Your favs`,
                            ephemeral: true,
                        });
                    }
                    else {
                        removeFavs(interaction.user.id, dispatcher.current);
                        return interaction.reply({
                            content: `${this.client.emoji.cross} Successfully **Removed** *${dispatcher.current.info.title(0, 40)}* from your Favourites`,
                            ephemeral: true,
                        });
                    }
                }
                if (interaction.customId === `oras_volLow`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    let vol = Math.round(dispatcher.player.filters.volume * 100 - 10);
                    if (vol === 0)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} Cannot Lower down the volume anymore!`,
                            ephemeral: true,
                        });
                    dispatcher.player.setVolume(vol / 100);
                    await interaction.deferUpdate();
                    return;
                }
                if (interaction.customId === `oras_volHigh`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    let vol = Math.round(dispatcher.player.filters.volume * 100 + 10);
                    if (vol >= 200)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} Cannot Increase the volume anymore!`,
                            ephemeral: true,
                        });
                    dispatcher.player.setVolume(vol / 100);
                    await interaction.deferUpdate();
                    return;
                }
                if (interaction.customId === `oras_shuffle`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    dispatcher.queue = dispatcher.queue.sort(() => Math.random() - 0.5);
                    return interaction.reply({
                        content: `${this.client.emoji.tick} Successfully **Shuffled** the queue`,
                        ephemeral: true,
                    });
                }
                if (interaction.customId === `oras_forward`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    let seek = dispatcher.player.position + 10000;
                    if (seek >= dispatcher.current.info.length)
                        seek = dispatcher.current.info.length;
                    await interaction.deferUpdate();
                    return dispatcher.player.seekTo(seek);
                }
                if (interaction.customId === `oras_backward`) {
                    if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                        return await interaction.message.delete().catch(() => { });
                    if (interaction.message.id !==
                        this.client.api.get(interaction.guild.id).data.get("Oras").id)
                        return await interaction.message.delete().catch(() => { });
                    if (!interaction.member.voice.channel &&
                        interaction.guild.members.me.voice.channel)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                            ephemeral: true,
                        });
                    if (interaction.guild.members.me.voice.channel &&
                        interaction.guild.members.me.voice.channel.id !==
                            interaction.member.voice.channel.id)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                            ephemeral: true,
                        });
                    const dispatcher = this.client.api.get(interaction.guild.id);
                    if (!dispatcher || !dispatcher.player)
                        return interaction.reply({
                            content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                            ephemeral: true,
                        });
                    let seek = dispatcher.player.position - 10000;
                    if (seek <= 0)
                        seek = 0;
                    await interaction.deferUpdate();
                    return dispatcher.player.seekTo(seek);
                }
            }
            if (interaction.isSelectMenu()) {
                for (const value of interaction.values) {
                    if (value === `oras_reset_filters`) {
                        if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                            return await interaction.message.delete().catch(() => { });
                        if (interaction.message.id !==
                            this.client.api.get(interaction.guild.id).data.get("Oras").id)
                            return await interaction.message.delete().catch(() => { });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.guild.members.me.voice.channel &&
                            interaction.guild.members.me.voice.channel.id !==
                                interaction.member.voice.channel.id)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                                ephemeral: true,
                            });
                        await dispatcher.player.clearFilters();
                        await interaction.deferUpdate();
                        return;
                    }
                    if (value === `oras_filter_8d`) {
                        if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                            return await interaction.message.delete().catch(() => { });
                        if (interaction.message.id !==
                            this.client.api.get(interaction.guild.id).data.get("Oras").id)
                            return await interaction.message.delete().catch(() => { });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.guild.members.me.voice.channel &&
                            interaction.guild.members.me.voice.channel.id !==
                                interaction.member.voice.channel.id)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            rotation: { rotationHz: 0.2 },
                        });
                        await interaction.deferUpdate();
                        return;
                    }
                    if (value === `oras_filter_bassboost`) {
                        if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                            return await interaction.message.delete().catch(() => { });
                        if (interaction.message.id !==
                            this.client.api.get(interaction.guild.id).data.get("Oras").id)
                            return await interaction.message.delete().catch(() => { });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.guild.members.me.voice.channel &&
                            interaction.guild.members.me.voice.channel.id !==
                                interaction.member.voice.channel.id)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            equalizer: [
                                { band: 0, gain: 0.1875 },
                                { band: 1, gain: 0.375 },
                                { band: 2, gain: -0.375 },
                                { band: 3, gain: -0.1875 },
                                { band: 4, gain: 0 },
                                { band: 5, gain: -0.0125 },
                                { band: 6, gain: -0.025 },
                                { band: 7, gain: -0.0175 },
                                { band: 8, gain: 0 },
                                { band: 9, gain: 0 },
                                { band: 10, gain: 0.0125 },
                                { band: 11, gain: 0.025 },
                                { band: 12, gain: 0.375 },
                                { band: 13, gain: 0.125 },
                                { band: 14, gain: 0.125 },
                            ],
                        });
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_filter_nightcore`) {
                        if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                            return await interaction.message.delete().catch(() => { });
                        if (interaction.message.id !==
                            this.client.api.get(interaction.guild.id).data.get("Oras").id)
                            return await interaction.message.delete().catch(() => { });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.guild.members.me.voice.channel &&
                            interaction.guild.members.me.voice.channel.id !==
                                interaction.member.voice.channel.id)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            timescale: { speed: 1.3, pitch: 1.3, rate: 1.0 },
                        });
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_filter_vibrato`) {
                        if (!this.client.api.get(interaction.guildId).data.get(`Oras`))
                            return await interaction.message.delete().catch(() => { });
                        if (interaction.message.id !==
                            this.client.api.get(interaction.guild.id).data.get("Oras").id)
                            return await interaction.message.delete().catch(() => { });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.guild.members.me.voice.channel &&
                            interaction.guild.members.me.voice.channel.id !==
                                interaction.member.voice.channel.id)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel as ${interaction.guild.members.me.voice.channel} to use this interaction!`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} There is no player for the guild currently!`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            vibrato: { depth: 1, frequency: 14 },
                        });
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_dj_filter_reset`) {
                        if (this.client.utils.checkServerPrem(interaction.guild.id) ===
                            false &&
                            this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                                false) {
                            this.client.utils.deleteDj(interaction.guild.id);
                            interaction
                                .reply({
                                content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                                ephemeral: true,
                            })
                                .then((x) => {
                                setTimeout(() => {
                                    interaction.message.delete().catch((e) => { });
                                }, 10000);
                            });
                            return;
                        }
                        let voted = await voteApi.hasVoted(interaction.user.id);
                        if (!voted &&
                            !this.client.config.owners.includes(interaction.user.id) &&
                            !this.client.utils.checkUserPrem(interaction.user.id))
                            return interaction.reply({
                                content: `You need to Vote Me to use this Interaction!`,
                                components: [
                                    this.client.utils.actionRow([
                                        this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                    ]),
                                ],
                                ephemeral: true,
                            });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel &&
                            interaction.member.voice.channelId !==
                                interaction.guild.members.me.voice.channelId)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} No Music Session is currently there!`,
                                ephemeral: true,
                            });
                        if (dispatcher.player.track === null)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} I am not playing anything currently`,
                                ephemeral: true,
                            });
                        await dispatcher.player.clearFilters();
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_dj_filter_8d`) {
                        if (this.client.utils.checkServerPrem(interaction.guild.id) ===
                            false &&
                            this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                                false) {
                            this.client.utils.deleteDj(interaction.guild.id);
                            interaction
                                .reply({
                                content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                                ephemeral: true,
                            })
                                .then((x) => {
                                setTimeout(() => {
                                    interaction.message.delete().catch((e) => { });
                                }, 10000);
                            });
                            return;
                        }
                        let voted = await voteApi.hasVoted(interaction.user.id);
                        if (!voted &&
                            !this.client.config.owners.includes(interaction.user.id) &&
                            !this.client.utils.checkUserPrem(interaction.user.id))
                            return interaction.reply({
                                content: `You need to Vote Me to use this Interaction!`,
                                components: [
                                    this.client.utils.actionRow([
                                        this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                    ]),
                                ],
                                ephemeral: true,
                            });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel &&
                            interaction.member.voice.channelId !==
                                interaction.guild.members.me.voice.channelId)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} No Music Session is currently there!`,
                                ephemeral: true,
                            });
                        if (dispatcher.player.track === null)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} I am not playing anything currently`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            rotation: { rotationHz: 0.2 },
                        });
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_dj_filter_bassboost`) {
                        if (this.client.utils.checkServerPrem(interaction.guild.id) ===
                            false &&
                            this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                                false) {
                            this.client.utils.deleteDj(interaction.guild.id);
                            interaction
                                .reply({
                                content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                                ephemeral: true,
                            })
                                .then((x) => {
                                setTimeout(() => {
                                    interaction.message.delete().catch((e) => { });
                                }, 10000);
                            });
                            return;
                        }
                        let voted = await voteApi.hasVoted(interaction.user.id);
                        if (!voted &&
                            !this.client.config.owners.includes(interaction.user.id) &&
                            !this.client.utils.checkUserPrem(interaction.user.id))
                            return interaction.reply({
                                content: `You need to Vote Me to use this Interaction!`,
                                components: [
                                    this.client.utils.actionRow([
                                        this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                    ]),
                                ],
                                ephemeral: true,
                            });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel &&
                            interaction.member.voice.channelId !==
                                interaction.guild.members.me.voice.channelId)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} No Music Session is currently there!`,
                                ephemeral: true,
                            });
                        if (dispatcher.player.track === null)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} I am not playing anything currently`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            equalizer: [
                                { band: 0, gain: 0.1875 },
                                { band: 1, gain: 0.375 },
                                { band: 2, gain: -0.375 },
                                { band: 3, gain: -0.1875 },
                                { band: 4, gain: 0 },
                                { band: 5, gain: -0.0125 },
                                { band: 6, gain: -0.025 },
                                { band: 7, gain: -0.0175 },
                                { band: 8, gain: 0 },
                                { band: 9, gain: 0 },
                                { band: 10, gain: 0.0125 },
                                { band: 11, gain: 0.025 },
                                { band: 12, gain: 0.375 },
                                { band: 13, gain: 0.125 },
                                { band: 14, gain: 0.125 },
                            ],
                        });
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_dj_filter_nightcore`) {
                        if (this.client.utils.checkServerPrem(interaction.guild.id) ===
                            false &&
                            this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                                false) {
                            this.client.utils.deleteDj(interaction.guild.id);
                            interaction
                                .reply({
                                content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                                ephemeral: true,
                            })
                                .then((x) => {
                                setTimeout(() => {
                                    interaction.message.delete().catch((e) => { });
                                }, 10000);
                            });
                            return;
                        }
                        let voted = await voteApi.hasVoted(interaction.user.id);
                        if (!voted &&
                            !this.client.config.owners.includes(interaction.user.id) &&
                            !this.client.utils.checkUserPrem(interaction.user.id))
                            return interaction.reply({
                                content: `You need to Vote Me to use this Interaction!`,
                                components: [
                                    this.client.utils.actionRow([
                                        this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                    ]),
                                ],
                                ephemeral: true,
                            });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel &&
                            interaction.member.voice.channelId !==
                                interaction.guild.members.me.voice.channelId)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} No Music Session is currently there!`,
                                ephemeral: true,
                            });
                        if (dispatcher.player.track === null)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} I am not playing anything currently`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            timescale: { speed: 1.3, pitch: 1.3, rate: 1.0 },
                        });
                        return await interaction.deferUpdate();
                    }
                    if (value === `oras_dj_filter_vibrato`) {
                        if (this.client.utils.checkServerPrem(interaction.guild.id) ===
                            false &&
                            this.client.utils.checkServerPremStatus(interaction.guild.id) ===
                                false) {
                            this.client.utils.deleteDj(interaction.guild.id);
                            interaction
                                .reply({
                                content: `${this.client.emoji.cross} This guild has **Ended its Premium Services**. So deleting this setup in 10 seconds....`,
                                ephemeral: true,
                            })
                                .then((x) => {
                                setTimeout(() => {
                                    interaction.message.delete().catch((e) => { });
                                }, 10000);
                            });
                            return;
                        }
                        let voted = await voteApi.hasVoted(interaction.user.id);
                        if (!voted &&
                            !this.client.config.owners.includes(interaction.user.id) &&
                            !this.client.utils.checkUserPrem(interaction.user.id))
                            return interaction.reply({
                                content: `You need to Vote Me to use this Interaction!`,
                                components: [
                                    this.client.utils.actionRow([
                                        this.client.utils.button(`link`, `Vote Me`, null, null, `${this.client.config.voteUrl}`, this.client.emoji.vote),
                                    ]),
                                ],
                                ephemeral: true,
                            });
                        if (!interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to a voice channel!`,
                                ephemeral: true,
                            });
                        if (interaction.member.voice.channel &&
                            interaction.guild.members.me.voice.channel &&
                            interaction.member.voice.channelId !==
                                interaction.guild.members.me.voice.channelId)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} You must be connected to the same voice channel: ${interaction.guild.members.me.voice.channel}`,
                                ephemeral: true,
                            });
                        const dispatcher = this.client.api.get(interaction.guild.id);
                        if (!dispatcher || !dispatcher.player)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} No Music Session is currently there!`,
                                ephemeral: true,
                            });
                        if (dispatcher.player.track === null)
                            return interaction.reply({
                                content: `${this.client.emoji.cross} I am not playing anything currently`,
                                ephemeral: true,
                            });
                        await dispatcher.player.setFilters({
                            vibrato: { depth: 1, frequency: 14 },
                        });
                        return await interaction.deferUpdate();
                    }
                }
            }
        };
    }
}
//# sourceMappingURL=InteractionCreate.js.map