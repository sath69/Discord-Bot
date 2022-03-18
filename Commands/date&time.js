const { Message } = require("discord.js");

 function format(date) {
    // gets the hours
    var hours = date.getHours();
    // gets the day
    var days = date.getDay();
    // gets the month
    var minutes = date.getMinutes();
    // gets AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    // converts hours to 12 hour instead of 24 hour
    hours = hours % 12;
    // converts 0 (midnight) to 12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // converts minutes to have leading 0
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    // the time string
    var time = hours + ':' + minutes + '' + ampm;
    // gets the match for the date string we want
    var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
    //the result
    return '📅 | Date: '+ match[0] + '\n🕖Time: ' + time;
 }

//displays date and time
module.exports = {
    name : 'date&time',
    description: 'displays date and time',
   execute(message, args, Discord){
     const embed = new Discord.MessageEmbed()
      .setTitle("Date and Time")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)
      .setColor("BLACK")
      .setDescription(format(new Date())) 
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
     
     
     message.channel.send({embeds: [embed]});
 }
 
 
}
