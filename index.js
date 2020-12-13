const Discord = require('discord.js');
const fs = require('fs');

require('dotenv').config();

// Create discord.js client
const client = new Discord.Client({ restTimeOffset: 200 });
// A collection for all the commands
client.commands = new Discord.Collection();

// Gets all the commands from the "commands" folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Adds commands to commands collection
    client.commands.set(command.name, command);
    console.log(`Command loaded: ${file}`);
}

// Gets all the events from the "events" folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    // Run event
    client.on(file.replace(".js", ""), event.bind(null, client));
    console.log(`Event loaded: ${file}`);
}

// Login
client.login(process.env.DISCORD);