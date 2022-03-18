// kick command
module.exports = {
	name: 'kick',
	description: 'kicks a member',
	execute(Discord, client, message, args){
		if(message.member.permissions.has('ADMINISTRATOR')){
			const member = message.mentions.users.first();
			if(member){
				const memberTarget = message.guild.members.cache.get(member.id);
				memberTarget.kick();
				 const embedd = new Discord.MessageEmbed() 
              .setColor("PURPLE") 
              .setTitle("You have kicked a member!")
              .setFooter("Powered by Geyser")
              .setDescription(`${member} has been kicked! RIP.`)
              .setTimestamp()
              .setThumbnail(member.displayAvatarURL)
        const embed = new Discord.MessageEmbed()
              .setColor("PURPLE")
              .setTitle(`Kicked!`)
              .setFooter("Powered By Geyser")
              .setDescription(`${member} has been kicked! RIP.`)
              .setThumbnail(member.displayAvatarURL)
              .setTimestamp()
        message.author.send({embeds: [embedd]});
		memberTarget.send({embeds: [embedd]});
        message.reply({embeds: [embedd]});        
			}else{
				message.reply('You cannot do that!')
			}
		}
	}
}
