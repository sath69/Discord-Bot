module.exports = {
	name: 'github',
	description: 'The official github!',
	execute(Discord, message, args){
		message.react('🤖');
		const newEmb = new Discord.MessageEmbed()
		.setColor("PURPLE")
		.setTitle('Github')
		.setFooter('Powered By Geyser')
		.setDescription('Below are our githubs:')
		.addFields(
			{ name: 'Sath Github:', value: 'https://github.com/sath69?tab=repositories', inline: false},
			{ name: 'Exo Github:', value: 'https://github.com/ExoOX1543?tab=repositories', inline: false }
		)
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setFooter(`Requested by ${message.author.username} || Powered By Geyser`)
		.setTimestamp()
		message.reply({embeds: [newEmb]});
	}
}