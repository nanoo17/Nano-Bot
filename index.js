const Discord = require("discord.js");
//definiendo permisos del bot
const intents = new Discord.Intents(131071);
//creando cliente
const client = new Discord.Client({ intents });

client.on('ready', () => {
  console.log(`Bot Logueado! ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  //el bot no responderá mensajes privados
  if (message.channel.type === 'DM') return;
  //el bot no respondera mensajes de otros bots
  if (message.author.bot) return;
  //definimos el prefijo de los comandos
  let prefix = "!";
  //condicionando que los mensajes comiencen con el prefijo
  if (!message.content.startsWith(prefix)) return;
  //definiendo argumentos separados por espacios
  const args = message.content.slice(prefix.length).trim().split(/ +/g); // Definimos args. Explicado en el video
  //definiendo comandos, serán las palabras siguientes al prefijo sin ningun espacio
  const command = args.shift().toLowerCase() // Definimos command, tambien explicado en el video
  //comando ping
  if (command === "ping") {
    message.reply("Pingo!")
  }
  if (command === "hola") {
    message.reply("Hola que tal!")
  }
});

//borrar token al commitear
client.login('');