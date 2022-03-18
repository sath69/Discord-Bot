const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
	name: 'youtube',
	description: 'The official youtube channels!!',
	execute(interaction){
     const { guild } = interaction;
    
    const { createdTimestamp, ownerId, description, members, memberCount, channels, emojis, stickers } = guild;
    
    const newEmbb = new MessageEmbed()
		.setColor("RED")
		.setTitle('Youtube Channels')
		.setFooter('Powered By Geyser')
		.setDescription('Below are our youtube channels:')
		.addFields(
			{ name: 'Sath Youtube Channel:', value: 'https://www.youtube.com/channel/UC30fzqiLWtEw0ZxRkYUBlUQ', inline: false}
		)
		.setThumbnail(interaction.author.displayAvatarURL({dynamic: true}))
		.setFooter(`Requested by ${interaction.author.username} || Powered By Geyser`)
		.setTimestamp()
		interaction.reply({embeds: [newEmbb]});
		console.log('youtube command loaded!');
	}
}