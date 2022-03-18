//simple ping command in rich embed
module.exports = {
    name: 'ping',
    description: 'A ping?',
    execute(message, args, Discord) {
        message.react('🏓');
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Someone pinged me?') 
        .setDescription(`🏓 | **Latency:** **${Date.now() - message.createdTimestamp}ms**`)
        .addFields(
            {name: 'Ping:', value: 'Dont be Stupid, I got a single pong back atcha.'}
        )
        .setFooter(`Requested by ${message.author.username} || Powered By Geyser`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true })) 
        .setTimestamp()
        message.reply({embeds: [newEmbed]});
    }
}




