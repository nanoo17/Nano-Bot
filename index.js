const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Bot logueado! ${client.user.tag}`);
});

client.on('interactionCreate', async msg => {
  // if (msg.content === 'ping') {
  //   msg.reply('Pingo!');
  // }
  console.log(msg.content);
});

client.login('OTY3MTA4NDc4MzQwNTkxNjQ3.YmLf9Q.QRrgjGp1EEy6O1EejuX-raLfb_w');