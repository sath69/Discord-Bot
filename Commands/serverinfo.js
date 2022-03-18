const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    description: 'Gives a/the server info!',
    /** 
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        const { guild } = interaction;

        const { createdTimestamp, ownerId, description, members, memberCount, channels, emojis, stickers } = guild;

        const Embed = new MessageEmbed()
        .setColor('#0000CD')
        .setAuthor(guild.name, guild.iconURL({dynamic: true}))
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addFields(
            {
                name: "---📙 {} GENERAL INFO---",
                value:[
                    `- Name: ${guild.name}`,
                    `- Created: <t:${parseInt(createdTimestamp / 1000)}:R>`,
                    `- Owner: <@${ownerId}>`,
                    `- Roles: ${guild.roles.cache.size}`,
                    `- Description: ${description}`
                ].join("\n")
            },
            {
                name: "---💡 {} USERS---",
                value:[
                    `👪 | Members: ${members.cache.filter((m) => !m.user.bot).size}`,
                    `🤖 | Bots:  ${members.cache.filter((m) => m.user.bot).size}`,
                    `Total: ${memberCount}`
                ].join("\n")
            },
            {

                name: "---📜 {} CHANNEL COUNT---",
                value:[
                    `💬 | Text: ${channels.cache.filter((c) => c.type === "GUILD_TEXT").size}`,
                    `🔊 | Voice: ${channels.cache.filter((c) => c.type === "GUILD_VOICE").size}`,
                    `#️⃣ | Threads: ${channels.cache.filter((c) => c.type === "GUILD_NEWS_THREAD" && "GUILD_PRIVATE_THREAD" && "GUILD_PUBLIC_THREAD").size}`,
                    `🗂 | Categories: ${channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}`,
                    `🎭 | Stages: ${channels.cache.filter((c) => c.type === "GUILD_STAGE_VOICE").size}`,
                    `📢 | News: ${channels.cache.filter((c) => c.type === "GUILD_NEWS").size}`,
                    `Total: ${channels.cache.size} `
                ].join("\n")
            },
            {
                name: "---😉 {} Emojis & Stickers---",
                value:[
                    `😲 | Emojis Animated: ${emojis.cache.filter((e) => e.animated).size}`,
                    `⛈️ | Emojis Static: ${emojis.cache.filter((e) => !e.animated).size}`,
                    `🌟 | Stickers: ${stickers.cache.size}`,
                    `Total: ${stickers.cache.size + emojis.cache.size}`
                ].join("\n")
            },
            {
                name: "---⚡ {} NITRO STATISTICS---",
                value: [
                    `☀️ | Tier: ${guild.premiumTier.replace("TIER_", "")}`,
                    `🚀 | Boosts: ${guild.premiumSubscriptionCount}`,
                    `🎚️ | Boosters: ${members.cache.filter((m) => m.premiumSince).size}`
                ].join("\n")
            }
        )
        .setFooter("Last checked").setTimestamp()


        interaction.reply({embeds: [Embed]})

    } 

}