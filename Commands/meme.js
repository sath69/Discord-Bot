//meme command
const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name:'meme',
    description:"meme command",

    async run (Discord, message, args){
       const subReddits = ["dankmeme", "meme", "memes","animememes","minecraftmemes","gamememes","celebritymemes","valorantmemes"]
       const random = subReddits[Math.floor(Math.random() * subReddits.length)]
       const img = await randomPuppy(random)
       const embed = new Discord.MessageEmbed()
       .setColor("YELLOW")
       .setImage(img)
       .setTimestamp()
       .setTitle(`Your **meme** has been granted from r/${random}`)
       .setURL(`https://reddit.com/r/${random}`)
       .setFooter(`Requested by ${message.author.username}`)
       
       message.reply({embeds: [embed]});
       

    }
}