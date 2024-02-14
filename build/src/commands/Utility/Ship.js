import OrasCommand from "../../abstract/OrasCommand.js";
import { AttachmentBuilder } from "discord.js";
import canvafy from "canvafy";

export default class Setup extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "ship",
        this.cat = "utility",
        this.aliases = ["love"],
        this.vote = true;
        this.premium = {
            guild: false,
            user: false,
        };
        this.exec = async (message, args, prefix) => {
            let member = message.mentions.members.first();
            if (!member) {
                let ship = this.client.utils
        .premiumEmbed(message.guildId)
        .setColor(client.config.color)
        .setAuthor({
            name: `Ship`,
            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`<:cross_trixo:1191728814204649552> | Command Usage: \`${prefix}ship <@user>\``)
        return message.channel.send({ embeds: [ship] });
            } else if (member.id === message.author.id) {
                return message.reply({ context: "Please mention someone else."})
            }
            const love = await new canvafy.Ship()
              .setAvatars(
                message.author.displayAvatarURL({
                    forceStatic: true,
                    extension: 'png',
                }),
                member.user.displayAvatarURL({ forceStatic: true, extension: 'png' })
              )
              .setBackground(
                "image",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2cK_ZhDI4tovVpww9oHqNkIz3V9zYbeGtA&usqp=CAU"
              )
              .setBorder("#0195fe")
              .setOverlayOpacity(0.5);
            
            const buffer = await love.build();

    const attachment = new AttachmentBuilder(buffer, { name: `love.png` });
              
            let em = this.client.utils
          .premiumEmbed(message.guildId)
          .setAuthor({
            name: `Ship`,
            iconURL: this.client.user.displayAvatarURL(),
          })
            .setDescription(`Calculating love percentage between ${message.author} and ${member}...`)
            .setImage(`attachment://love.png`)
            return message.channel.send({ files: [attachment], embeds: [em] });

            }
        }
    }
