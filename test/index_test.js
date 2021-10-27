const test = require('ava');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const dotenv = require('dotenv');
const bot = require('../index');
dotenv.config();
clientId = process.env.CLIENT_ID
guildId = process.env.GUILD_ID
token = process.env.DISCORD_TOKEN

//const {promisify} = require('util');

const getMembers = async () => {
  await bot.client.login(token);
  let val = await bot.getMembers(guildId);
  return val;
};

test('if client can get member count', async t => {
  await client.login(token);
  let count = await client.guilds.cache.get(guildId).memberCount;
  console.log("count::::::>" +count );
  let members = await getMembers();
  console.log("members::::::>" +members );
  //const members = await promisify(bot.getMembers)(guildId);
  t.is(count, members);
});

/**
let guildId = '';
client.on('ready', () => {
...
... const guild = client.guilds.cache.get(guildId);
... const count = guild.memberCount;
... });

**/
