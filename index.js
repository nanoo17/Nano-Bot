const { respuestaPing } = require('./comandos/ping');
const { respuestaHola } = require('./comandos/hola');
const { respuestaHelp } = require('./comandos/help');
const { meMide } = require('./comandos/mide');
const mundial = require('./comandos/mundial');
const Discord = require('discord.js');
const cron = require('node-cron');
const { token, canalGeneral } = require('./token');
//definiendo permisos del bot
const intents = new Discord.Intents(131071);
//creando cliente
const client = new Discord.Client({ intents });
client.on('ready', () => {
  console.log(`Bot Logueado! ${client.user.tag}!`);
  //canal general
  const canal = client.channels.cache.get(canalGeneral());
  //cron para mandar el mensaje todos los dias
  cron.schedule('00 00 12 * * 0-6', () => {
    canal.send(mundial.funcionDia());
  });
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
  const command = args.shift().toLowerCase()
  //comandos
  if (command === "ping") {
    respuestaPing(message);
  }
  if (command === "hola") {
    respuestaHola(message);
  }
  if (command === "help") {
    respuestaHelp(message);
  }
  if (command === "qatar") {
    message.channel.send(mundial.funcionDia());
  }
  if (command === "memide") {
    meMide(message);
  }
});

//solucion de token al commitear
client.login(token());