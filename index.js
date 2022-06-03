const DJS = require('discord.js')
const CH = require('command-handler')
const path = require('path')
require('dotenv/config')

const client = new DJS.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
})

client.on('ready', () => {
  console.log('The bot is ready')

  new CH({
    client,
    commandsDir: path.join(__dirname, 'commands'),
  })
})

client.login(process.env.TOKEN)
