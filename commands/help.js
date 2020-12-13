const Discord = require('discord.js');

module.exports = {
    name: "help",
    cooldown: 2,
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(0x00A2E8)
            .setTitle("Help")
            .addField("horny.random.pornhub", "Sends a random PH video")
            .addField("horny.search.pornhub query", "Searchs a PH video")
            .addField("horny.random.pornstar", "Sends a random PH pornstar")
            .addField("horny.search.pornhub", "Searchs a PH pornstar")
            .addField("horny.random.album", "Sends a random PH album")
            .addField("horny.search.album", "Searchs a PH album")
            .addField("horny.random.gif", "Sends a random PH gif")
            .addField("horny.search.gif", "Searchs a PH gif")
        message.channel.send(embed);
    }
}