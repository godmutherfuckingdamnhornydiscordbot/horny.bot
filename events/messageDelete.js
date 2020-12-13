const Discord = require('discord.js');
const vars = require("../data/vars");
const utils = require("../data/utils");

module.exports = (client, message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`The horny fellow said:`)
        .setColor(utils.randomHex())
        .setDescription(message.content)
        .setAuthor(message.member.user.username, message.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
    message.channel.send(embed);
};