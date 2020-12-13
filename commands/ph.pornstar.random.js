const Discord = require('discord.js');
const utils = require("../data/utils");
const PornHub = require('pornhub.js');

module.exports = {
    name: "random.pornstar",
    cooldown: 2,
    execute: async(message, args) => {
        message.channel.send(utils.createLoading()).then((msg) => {
            const pornhub = new PornHub();

            pornhub.search('Pornstar', utils.genereazaCuvint()).then(res => {
                const randomVid = res.data[Math.floor(Math.random() * res.data.length)];
                const embed = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(randomVid.name)
                    .setURL(randomVid.url)
                    .setImage(randomVid.photo)
                    .addField("Views", randomVid.views, true)
                    .addField("Number of videos", randomVid.videoNum, true)
                    .addField("Rank", randomVid.rank, true)
                msg.edit(embed);
            }).catch((err) => msg.edit(utils.createError("Error!\n" + err)));
        });
    }
}