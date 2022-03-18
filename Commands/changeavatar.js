
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = {
  name: 'changeavatar',
  aliases: ["change-avatar"],
  usage: '',
  description: '',
  category: "ownerOnly",
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
    var url;
    if (message.attachments.size > 0) {
      if (message.attachments.every(attachIsImage)) {
        const response = await fetch(url);
        const buffer = await response.buffer();
        fs.writeFile(`./image.jpg`, buffer, () =>
          console.log('Finished downloading the Avatar!'));
        client.user.setAvatar(`./image.jpg`)
          .then(user => {
            return message.channel.send({
              embeds: [new MessageEmbed()
                .setTitle(`${client.allEmojis.y} Successfully changed the Bot Avatar!`)
                .setColor("BLACK")
                .setFooter({text: `Action Powered By Geyser @2022.`})
              ]
            });
          })
          .catch(e => {
            return;
          });
      } else {
        return message.channel.send({
          embeds: [new MessageEmbed()
            .setTitle(`${message.author.usernamex} ERROR | Could not use your Image as an Avatar, make sure it is a \`png\` or \`jpg\``)
            .setColor("RED")
            .setFooter({text: `Action Powered By Geyser @2022.`})
          ]
        });
      }
    } else if (message.content && textIsImage(message.content)) {
      url = args.join(" ")
      const response = await fetch(url);
      const buffer = await response.buffer();
      await fs.writeFile(`./image.jpg`, buffer, () =>
        console.log('finished downloading the Avatar!'));
      client.user.setAvatar(`./image.jpg`)
        .then(user => {
          try {
            fs.unlinkSync()
          } catch {

          }
          return message.channel.send({
            embeds: [new MessageEmbed()
              .setTitle(`${client.allEmojis.y} Successfully changed the Bot Avatar!`)
              .setColor("BLUE")
              .setFooter({text: `Action Powered By Geyser @2022.`})
            ]
          });
        })
        .catch(e => {
          return;
        });

    } else {
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setTitle(`${message.author.username} ERROR | Could not use your Image as an Avatar, make sure it is a \`png\` or \`jpg\``)
          .setDescription(`**Usage:** \`+changeavatar <AVATARLINK/IMAGE>\``)
          .setColor("RED")
          .setFooter({text: `Action Powered By Geyser @2022.`})
        ]
      });
    }
  }
}

function attachIsImage(msgAttach) {
    url = msgAttach.url;

    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/ ) !== -1 ||
      url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/ ) !== -1 ||
      url.indexOf("jpg", url.length - "jpg".length /*or 3*/ ) !== -1;
  }

  function textIsImage(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }