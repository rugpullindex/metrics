const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

dotenv.config();
clientId = process.env.CLIENT_ID
guildId = process.env.GUILD_ID
token = process.env.DISCORD_TOKEN

async function getMembers(GUILD_ID){
	let count = 0;
	//client.login(token);
	count = client.guilds.cache.get(guildId).memberCount;
	console.log("member count==>" +count);
	return client.guilds.cache.get(guildId).memberCount;
}


client.once('ready', () => {
	getMembers(guildId);
});
client.login(token);

module.exports = { getMembers, client };
