const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: 'creators',
  description : 'creator command',
  execute(interaction){
    const { guild } = interaction;
    
    const { createdTimestamp, ownerId, description, members, memberCount, channels, emojis, stickers } = guild;
    
    const newEmbb = new MessageEmbed() 
		.setColor("RED") 
		.setTitle('Creators')
		.setDescription('Developed by Exo and Sath(Sathujan):')
		.setThumbnail(interaction.author.displayAvatarURL({dynamic: true}))
		.setFooter({text: `Requested by ${interaction.author.username} || Powered By Geyser`})
		.setTimestamp()
		interaction.reply({embeds: [newEmbb]});
		console.log('creators command loaded!');
  }
    
}