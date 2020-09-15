const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://fernando-bot-kuy.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("saya telah online");
});

client.on('message', async  message => {
  if (message.content === "fhelp") {
message.channel.send('Hello Sir');
  }
});

client.login(process.env.TOKEN)
