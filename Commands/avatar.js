const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  description: "Show Member Avatar!",
  usage: "Avatar | <Mention Member>",
  run: async (Discord, client, message, args) => {
    //Start
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .addField(
        "Links",
        `[png](${Member.user.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${Member.user.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${Member.user.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.user.displayAvatarURL({ dynamic: true }))
	  .setFooter({text: `Requested By ${message.author.username} || Powered By Geyser`})
      .setTimestamp();

    message.channel.send({embeds: [embed]});

    //End
  }
};

