import { Google } from "@flytri/lyrics-finder";

import fetch from "node-fetch";

import OrasCommand from "../../abstract/OrasCommand.js";

export default class Lyrics extends OrasCommand {

    constructor(client) {

        super(client);

        this.name = "lyrics";

        this.aliases = ["ly"];

        this.cat = "music";

        this.vc = false;

        this.samevc = false;

        this.dispatcher = false;

        this.playing = false;

        this.vote = false;

        this.exec = async (message, args, prefix) => {

            if (!args[0])

                return message.reply({

                    content: `${this.client.emoji.cross} Please provide me a Song Name to find Lyrics For!`,

                });

            await message.channel.sendTyping();

            const currentSong = args.join(" ");

            const titles = currentSong.replace(/\(Official (Video|Audio|Music Video)\)/gi, "").trim(); 

            const authors = currentSong.replace(/- Topic$/gi, "").trim();

            const lyricEmbed = this.client.utils.premiumEmbed(message.guildId).setAuthor({ name: `Lyrics`, iconURL: message.guild.iconURL()});

            

            let lyricSong = null;

            let lyricUrl = null; 

            let lyricThumbnail = null; 

            let lyricAuthor = null;

            let lyricTitle = null;

            

            try {

            

                await fetch(`https://weeb-api.vercel.app/genius?query=${titles}`)

                    .then((res) => res.json())

                    .then(async (data) => {

                        const url = data[0].url;

                        const thumbnail = data[0].image;

                        const author = data[0].artist;

                        const title = data[0].title;

                        await fetch(`https://weeb-api.vercel.app/lyrics?url=${url}`)

                            .then((res) => res.json())

                            .then((lyrics) => {

                                lyricSong = lyrics;

                            });

                        lyricUrl = url;

                        lyricThumbnail = thumbnail;

                        lyricAuthor = author;

                        lyricTitle = title;

                    });

            }catch (err) { lyricEmbed.setDescription(`${client.emoji.cross} | No lyrics were found For the current song! Use original author's music from default or Use Spotify to find lyrics of the song.`);

            

            return message.channel.send({ embeds: [lyricEmbed]});

            }

            if (!lyricSong) { lyricEmbed.setDescription(`${client.emoji.cross} | No lyrics were found For the current song! Use original author's music from default or Use Spotify to find lyrics of the song.`);

            return message.channel.send({ embeds: [lyricEmbed]}); }

            

            if (lyricSong.length > 4096) { 

                lyricEmbed.setDescription(`${lyricSong.slice(0, 3900)}\n\n[Click for more](${lyricUrl})`); 

                

            } else { 

                lyricEmbed
                    .setDescription(`${lyricSong}\n\n[Click for more](${lyricUrl})`); }

                

                lyricEmbed 

                .setAuthor({ name: `Lyrics`, iconURL: message.guild.iconURL(), }) 

                .setTitle(`${lyricTitle}`) 

                .setThumbnail(lyricThumbnail) 

                .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ size: 2048, dynamic: true }), }) 

                .setTimestamp();

                

                await message.channel.sendTyping(); return message.channel.send({ embeds: [lyricEmbed]});

            

 

        };

    }

}

//# sourceMappingURL=Lyrics.js.map