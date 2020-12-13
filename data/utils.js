const Discord = require('discord.js');

// Creates an error embed
function createError(error) {
    const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Error!')
        .setDescription(error)
        .setTimestamp()
    return embed;
}

// Creates a warning embed
function createWarning(warning) {
    const embed = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Warning!')
        .setDescription(warning)
        .setTimestamp()
    return embed;
}

// Creates a success embed
function createSuccess(title, success) {
    const embed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(title)
        .setDescription(success)
        .setTimestamp()
    return embed;
}

// Random number in range
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checks if it is a valid hex color
function isHexColor(hex) {
    return typeof hex === 'string' &&
        hex.length === 6 &&
        !isNaN(Number('0x' + hex))
}

// Just an embed generator
function generateEvent(eN, eC) {
    const embed = new Discord.MessageEmbed()
        .setColor('#3477eb')
        .setTitle(eN)
        .setDescription(eC)
        .setTimestamp()
    return embed;
}

// Random hex color
function randomHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Creates an embed with a loading emoji
function createLoading() {
    var loading = new Discord.MessageEmbed()
        .setTitle("<a:loading:787751609849479188> Loading...")
        .setTimestamp();
    return loading;
}

// Checks if a string is a normal integer
function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

// Returns readable date from milliseconds
const dateThing = (millis) => {
    var mydate = new Date(millis);
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][mydate.getDay()];
    return mydate.getMinutes() + ":" + mydate.getHours() + " " + day + "/" + month + "/" + mydate.getFullYear();
}

// Returns readable hours from milliseconds
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

function genereazaCuvint() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

// Returns date from milliseconds
function msToHMS(ms) {
    var seconds = ms / 1000;
    var hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = parseInt(seconds / 60);
    seconds = seconds % 60;
    return { "hours": hours, "minutes": minutes, "seconds": seconds };
}


const convertBytes = function(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

    if (bytes == 0) {
        return "n/a"
    }

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

    if (i == 0) {
        return bytes + " " + sizes[i]
    }

    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

module.exports = { createError, createWarning, genereazaCuvint, createSuccess, randomRange, isHexColor, generateEvent, randomHex, createLoading, isNormalInteger, dateThing, msToHMS, msToTime, convertBytes };