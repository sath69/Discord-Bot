//a bot made by Exo and Sath
const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767}); 
const randomPuppy = require('random-puppy');
const AntiSpam = require("discord-anti-spam");
const mySecret = process.env['token']
const read = require('fs');
const { execute } = require(`./Commands/hello`);
const commands = [];
const fs = require('fs')
const prefix = '$'
client.commands = new Discord.Collection();

client.on("ready", () => {
    console.log(`${client.user.username} is Online!`);
    console.log(`Prefix is ${prefix}`)
  

    const StatusNameArray = [
        `Booting Geyser...`,
        `In Beta!`,
        `Coded By Sath And Exo!`,
        `Github: github.com/sath69`
    ]

    const StatusTypeArray = [
        `PLAYING`,
        `WATCHING`,
        `LISTENING`
    ]

    const StatusArray = [
        `online`,
        `idle`,
        `dnd`
    ]

    setInterval(() => {
        client.user.setPresence({
            activities: [{
                name: `${StatusNameArray[Math.floor(Math.random() * StatusNameArray.length)]}`,
                type: `${StatusTypeArray[Math.floor(Math.random() * StatusTypeArray.length)]}`
            }],
            status: `${StatusArray[Math.floor(Math.random() * StatusArray.length)]}`
        })
    }, 5 * 60 * 1000) // 5 Minutes [Recommend to put to more than 2 minutes to not get Ratelimited ]
	console.log('Geyser Status Set! Changing every 5mins!')
	console.log('Commands Loaded!')

})

//Sends a message once joined a guild! .systemGuild
client.on('guildCreate', guild => {
  guild.systemChannel.send(`Hello, I'm Geyser. Thanks for inviting me, this will be **updated** soon! :alien:`)
});








//automatically set 'member' role
client.on('guildMemberAdd', guildMember =>{
   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
   guildMember.roles.add(welcomeRole);
   const embedd = new Discord.MessageEmbed() 
    .setColor("WHITE") 
    .setTitle(`Welcome!`)
    .setFooter("Powered by Geyser")
    .setDescription(`Welcome ,<@$  {guildMember.user.id}>, hope you stick around and enjoy the server!`)
    .setThumbnail(guildMember.user.displayAvatarURL({ dynamic: true }))
guildMember.guild.channels.cache.get('welcome').send(embedd)
});




				  
//Making the client search the folder for the given commands
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js')); 
for(const file of commandFiles){
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}




//yo im doing smth, ill give it a go
		
//commands
client.on('messageCreate', message =>{
   if(!message.content.startsWith(prefix) || message.author.bot)return;
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();


   if(command === 'ping'){
      client.commands.get('ping').execute(message, args, Discord);
   }else if(command === 'hello'){
      client.commands.get('hello').execute(Discord, message, args);
   }else if(command === 'clear'){
	  client.commands.get('clear').execute(client, message, args, Discord);
   }else if(command === 'lock'){
	   client.commands.get('lock').execute(client, message, args);
   }else if(command === 'unlock'){
	   client.commands.get('unlock').execute(client, message, args);
   }else if(command === 'meme'){
     client.commands.get('meme').run(Discord, message, args);
   }else if(command === 'ban'){
     client.commands.get('ban').execute(message, args, Discord);
   }else if(command === 'kick'){
     client.commands.get('kick').execute(Discord, client, message, args);
   }else if(command === 'date'){
    client.commands.get('date&time').execute(message,args,Discord);
   }else if(command==='github'){
	   client.commands.get('github').execute(Discord, message, args);
   }else if(command==='gaycalc'){
	   client.commands.get('gaycalc').run(Discord, client, message, args);
   }else if(command==='hack'){
	   client.commands.get('hack').run(Discord, client, message, args);
   }else if (command==='avatar'){
	   client.commands.get('avatar').run(Discord, client, message, args);
   }else if(command==='membercount'){
	   client.commands.get('membercount').execute(message, args, Discord, client);
   }else if(command==='serverinfo'){
	   client.commands.get('serverinfo').execute(message, args);
   }else if(command === 'rps'){   client.commands.get('rps').execute(client, message, args);
   } else if(command === 'unban'){   client.commands.get('unban').execute(message, args, client, Discord);
   }else if (command === '8ball'){
     client.commands.get('8ball').execute(client, message, args);
   }else if(command ==='help'){
	   client.commands.get('help').execute(Discord, message, args);
   }else if(command==='changename'){
       client.commands.get('changename').execute(client, message, args)
   }else if (command ==='changeavatar'){
       client.commands.get('changeavatar').execute(client, message, args)
   }
  
});
//Remember to give the bot intents before starting the bot.
client.login(mySecret);

