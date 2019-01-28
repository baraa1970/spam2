const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539533605735759897")
setInterval(function() {
channel.send(`234 bar ??? `);
}, 3)
})

client.login(process.env.BOT_TOKEN);