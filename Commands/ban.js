//ban command
module.exports = {
    name: 'ban',
    description: 'This command ban a given member!',
    execute(message, args, Discord){
        if (message.member.permissions.has("ADMINISTRATOR")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
               const embedd = new Discord.MessageEmbed() 
              .setColor("RED") 
              .setTitle("You have banned a member!")
              .setFooter("Powered by Geyser")
              .setDescription(`${member} has been banned! RIP.`)
              .setTimestamp()
              .setThumbnail(member.displayAvatarURL)
              const embed = new Discord.MessageEmbed() 
              .setColor("RED") 
              .setTitle(`Banned!`)
              .setFooter({text: `Requested By ${message.author.username} || Powered By Geyser`})
              .setDescription(`${member} has been banned! RIP.`)
              .setTimestamp()
              .setThumbnail(member.displayAvatarURL)
              message.author.send({embeds: [embedd]});
              message.reply({embeds: [embedd]});
            }else{
                message.reply("You can't do that!")
            }
        }else{
            message.reply("You have no permission to handle this command!")
        }

    }
}

  