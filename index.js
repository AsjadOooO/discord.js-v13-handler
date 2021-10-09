console.clear();
const Discord = require("discord.js");
const config = require('./config.js')

const { V2dClient } = require("visa2discord")
const client = new V2dClient({
  allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
  intents: [
  Discord.Intents.FLAGS.GUILD_MESSAGES ,Discord.Intents.FLAGS.GUILDS
  ]
})
client.loadEvents("test/events");
client.loadCommands("test/commands");

client.initializeMongoose(config.mongo) // if you need to connect to mongo remove this line otherwise


client.login(config.token)
