const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "gaycalc",
  aliases: ['gaycalculator'],
  description: "Show How Gay A Member Is!",
  usage: "How gay <Mention Member>",
  run: async (Discord, client, message, args) => {
    //Start
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`Gay v2 Machine`)
      .setDescription(`${Member.user.username} is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username} || Powered By Geyser`)
	  .setThumbnail(message.author.displayAvatarURL( {dynamic: true}))
      .setTimestamp();

    message.channel.send({embeds: [embed]});
	console.log('GayCalc ready!');

    //End
  }
};