const vars = require("../data/vars");

module.exports = (client, message) => {
    client.user.setPresence({ activity: { name: `at you, horny fellows`, type: 3 } });
    console.log("Ready!");
};