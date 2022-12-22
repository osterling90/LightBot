const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        //GatewayIntentBits.GuildMembers
    ]
});
client.on('ready', async () => {
    console.log('Testing ' + client.user.tag + '...')
});
client.on('messageCreate', message => {
    const serverLatency = Math.round(client.ws.ping)
    const serverPing = Math.abs((Date.now() - message.createdTimestamp))
    if(message.content === '!latency'){
        message.channel.send('API Latency: ' + serverLatency + ' ms')
    }
    else if(message.content === '!ping'){
        message.channel.send('Ping: ' + serverPing + ' ms' )
    }
    /*else if(message.content === '!latency -d'){
        message.reply()
    }
    else if(message.content === '!ping -d'){
        message.reply()
    }*/
    
    
    
});

client.login(process.env.TOKEN);