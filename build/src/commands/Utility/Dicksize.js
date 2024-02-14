import OrasCommand from "../../abstract/OrasCommand.js";

export default class Dicksize extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "dicksize";
  this.cat = "utility";
  this.vote = true;
  this.premium = {
    guild: false,
    user: false,
};
  this.aliases = ["dick", "lund", "ppsize"],
  this.exec = async (message, args, prefix) => {
    const sizes = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
      "8================D",
      "8==================D"
    ];

    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
      const ID = user.id;

    const result = sizes[Math.floor(Math.random() * sizes.length)];

    let em = this.client.utils
                .premiumEmbed(message.guildId)
                .setAuthor({
                    name: `D$ck Size ?`,
                    iconURL: this.client.user.displayAvatarURL(),
                })
                .addFields([
                  {
                    name: `${user.user.tag}`,
                    value: `<@${ID}> **Dick** Size Is ${result}`,
                  },
                ])
      .setFooter({
        text: `Requested By: ${message.author.tag}`,
        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
    })
      .setTimestamp();

    message.channel.send({ embeds: [em] });
  }
}
}
