module.exports = {
	name: 'hello',
	description: 'hello command!',
	execute(Discord, message, args){
		message.react('🤝');
		const newEmb = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle('Hi!')
		.setFooter('Powered By Geyser')
		.setDescription(`Hello, ${message.author}`)
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setFooter(`Requested by ${message.author.username} || Powered By Geyser`)
		.setTimestamp()
		message.reply({embeds: [newEmb]});
	}
}