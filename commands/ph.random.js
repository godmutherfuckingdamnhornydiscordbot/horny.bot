const Discord = require('discord.js');
const utils = require("../data/utils");
const PornHub = require('pornhub.js');

module.exports = {
    name: "random.pornhub",
    cooldown: 2,
    cooldown: 2,
    execute: async(message, args) => {
        message.channel.send(utils.createLoading()).then((msg) => {
            const pornhub = new PornHub();

            pornhub.search('Video', utils.genereazaCuvint()).then(res => {
                const randomVid = res.data[Math.floor(Math.random() * res.data.length)];
                const embed = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(randomVid.title)
                    .setURL(randomVid.url)
                    .setThumbnail(randomVid.preview)
                    .addField("Duration", randomVid.duration, true)
                    .addField("HD", randomVid.hd, true)
                    .addField("Premium", randomVid.premium, true)

                msg.edit(embed);
            });
        });
    }
}