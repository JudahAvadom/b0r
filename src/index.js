const { Client, GatewayIntentBits, Events } = require('discord.js');
const { saludo } = require("../src/arrays/list")

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

// Constants
const tasaDolar = 27.55

client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('dnd'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);

});

client.on("messageCreate", message => {
    if(message.author.username !== "b0r") {
        const msg = message.content.toLowerCase()
        if (msg.includes("colombia") || msg.includes("colombiana") || msg.includes("colombianas") || msg.includes("colombiano") || msg.includes("colombianos")) {
            message.channel.send('Malditos colombianos')
            return
        }
    }
})

/**
 * Precio
 */
client.on("messageCreate", message => {
    if(message.author.username !== "b0r") {
        const msg = message.content.toLowerCase()
        if (msg.includes("b0r")) {
            if (msg.includes("dolar")) {
                message.channel.send('En Bs. ' + tasaDolar)
            }
            if (msg.includes("arroz")) {
                message.channel.send('No se mano')
            }
            if (msg.includes("cerveza")) {
                message.channel.send('En $3 la Polar en botella')
            }
            if (msg.includes("harina")) {
                message.channel.send('En Bs. 36')
            }
            if (msg.includes("queso")) {
                message.channel.send('El kilo esta en Bs. 129')
            }
        }
    }
})


client.on("messageCreate", message => {
    const random = Math.floor(Math.random() * saludo.length);
    if(message.author.username !== "b0r") {
        const msg = message.content.toLowerCase()
        if (msg.includes("b0r") && msg.includes("hola")) {
            message.channel.send(saludo[random])
            return
        }
    }
})

const token = 'MTEwODgyNTM5MDQxMzI3MTE1MA.Gxis2l.cpjSuPWIRvpiW0svp7m8VtYneg78Yeof9ATUSc';
client.login(token);
