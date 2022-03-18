const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack A Member!",
  usage: "Hack @<Mention Member>",
  run: async (Discord, client, message, args) => {
    //Start
	message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Hack!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`Imagine trying to hack no-one in particular relativeness to you lol!`);

    let embed = new MessageEmbed()
      .setColor("BLUE")
      .setTitle(`Hack Status: Completed`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
	  .addFields(
		  {name: 'Username:', value: `**${Member.user.username}lovespoo@gmail.com**`, inline: false},
		  {name: 'Password:', value: '**Ilikepoo**', inline: false}
	  )
      .setFooter({text: `Hecked By ${message.author.username} || Powered By Geyser`})
      .setTimestamp();

    await message.channel.send(`Hacking Started! Hacking ${Member.user.username}`);

    await message.channel.send(`Hack Status: 10%`);
    await message.channel.send(`Hack Status: 20%`);
    await message.channel.send(`Hack Status: 30%`);
    await message.channel.send(`Hack Status: 40%`);
    await message.channel.send(`Hack Status: 50%`);
    await message.channel.send(`Hack Status: 60%`);
    await message.channel.send(`Hack Status: 70%`);
    await message.channel.send(`Hack Status: 80%`);
    await message.channel.send(`Hack Status: 90%`);

    setTimeout(function() {
      message.channel.send({embeds: [embed]});
    }, 4500);

    //End
  }
};