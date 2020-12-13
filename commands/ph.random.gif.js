const Discord = require('discord.js');
const utils = require("../data/utils");
const PornHub = require('pornhub.js');

module.exports = {
    name: "random.gif",
    cooldown: 2,
    execute: async(message, args) => {
        message.channel.send(utils.createLoading()).then((msg) => {
            const pornhub = new PornHub();

            pornhub.search('Gif', utils.genereazaCuvint()).then(res => {
                const randomVid = res.data[Math.floor(Math.random() * res.data.length)];
                const embed = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(randomVid.title)
                    .setURL(randomVid.url)
                msg.edit(embed);
                msg.channel.send(randomVid.webm)
            }).catch((err) => msg.edit(utils.createError("Error!\n" + err)));
        });
    }
}