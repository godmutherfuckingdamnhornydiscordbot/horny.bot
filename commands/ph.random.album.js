const Discord = require('discord.js');
const utils = require("../data/utils");
const PornHub = require('pornhub.js');

module.exports = {
    name: "random.album",
    cooldown: 2,
    execute: async(message, args) => {
        message.channel.send(utils.createLoading()).then((msg) => {
            const pornhub = new PornHub();

            pornhub.search('Album', utils.genereazaCuvint()).then(res => {
                const randomVid = res.data[Math.floor(Math.random() * res.data.length)];
                const embed = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(randomVid.title)
                    .setURL(randomVid.url)
                    .setThumbnail(randomVid.preview)
                    .addField("Rating", randomVid.rating, true)
                msg.edit(embed);
            }).catch((err) => msg.edit(utils.createError("Error!\n" + err)));
        });
    }
}