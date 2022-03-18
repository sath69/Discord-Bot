const Discord = require('discord.js');
const { MessagEmbed } = require("discord.js");

module.exports = {
    name: 'membercount',
    description: 'Gets the server membercount!',
    execute(message, args, Discord, client){
        const embed12 = new Discord.MessageEmbed()
        .setTitle('Total Members:')
        .setDescription(`❗| ${message.guild.memberCount}\n\n**Humans:**\n 👥 | ${message.guild.members.cache.filter(member => !member.user.bot).size}\n\n**Bots:**\n🤖 | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
        .setThumbnail(message.guild.iconURL({size: 4096, dynamic: true}))
        .setFooter(`Requested by ${message.author.username} || Powered By Geyser!`)
        .setTimestamp()
        message.reply({embeds: [embed12]})
    }
}