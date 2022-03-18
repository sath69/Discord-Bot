const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'changename',
  aliases: ["changename"],
  usage: '',
  description: '',
  category: "",
  cooldown: 0,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: true,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  async execute(client, message, args) {
    if (!args[0])
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setFooter({text: `Requested By ${message.author.username}`})
          .setTitle(`${message.author.username} You need to mention a new Bot Name`)
          .setDescription(`**Usage:** \`+change-name <New Bot Name>\``)
        ]
      });

    if (args.join(" ").length > 32)
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setFooter({text: `Requested By ${message.author.username}`})
          .setTitle(`${message.author.username} Bot Name too long, can't have more then 32 Letters!`)
        ]
      });
    client.user.setUsername(args.join(" "))
      .then(user => {
        return message.channel.send({
          embeds: [new MessageEmbed()
            .setColor("BLACK")
            .setFooter({text: `Requested By ${message.author.username}`})
            .setTitle(`${message.author.username} Changed my Name to: \`${user.username}\``)
          ]
        });
      })
      .catch((e) => {
          console.log(e)
          return message.channel.send(`${e.message}`);
      });
  }
}