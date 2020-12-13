const Discord = require('discord.js');
const utils = require("../data/utils");
const PornHub = require('pornhub.js');

module.exports = {
    name: "search.pornstar",
    cooldown: 2,
    execute: async(message, args) => {
        if (!args[0]) return message.channel.send(utils.createError("I need a query!"));

        message.channel.send(utils.createLoading()).then((msg) => {
            const pornhub = new PornHub();

            pornhub.search('Pornstar', args[0]).then(res => {
                const randomVid = res.data[0];
                const embed = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(randomVid.name)
                    .setURL(randomVid.url)
                    .setImage(randomVid.photo)
                    .addField("Views", randomVid.views, true)
                    .addField("Number of videos", randomVid.videoNum, true)
                    .addField("Rank", randomVid.rank, true)
                msg.edit(embed);
            });
        });
    }
}