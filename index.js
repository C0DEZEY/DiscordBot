const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config/config');
const colors = require("colors");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "Against other clients",
      type: 5
    }],
    status: 'idle'
  }
});

// Host the bot: stole from somee discord template YOINK!
require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("Nice token  ".red)
  return process.exit();
};

client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "application_commands", "modals", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

client.login(AuthenticationToken)
  .catch((err) => {
    console.error("You suck at coding your bot is dumb");
    console.error("Discord API SUCKS:" + err);
    return process.exit();
  });

process.on('unhandledRejection', async (err, promise) => {
  console.error(`Rejection: ${err}`.red);
  console.error(promise);
});
