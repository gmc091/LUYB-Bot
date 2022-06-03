const DJS = require('discord.js')
require('dotenv/config')

const client = new DJS.Client({
    intents: ['GUILDS']
})

client.on('ready', () => {
    console.log("The bot is ready!!")
})

client.login(process.env.TOKEN)