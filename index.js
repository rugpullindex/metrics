import dotenv from "dotenv";
import fetch from "cross-fetch";

dotenv.config();

const guildId = process.env.GUILD_ID;
const token = process.env.DISCORD_TOKEN;
const baseUrl = process.env.BASE_URL.endsWith("/")
  ? process.env.BASE_URL.slice(0, -1)
  : process.env.BASE_URL;

const getMembersCount = async () => {
  const res = await fetch(`${baseUrl}/guilds/${guildId}?with_counts=true`, {
    method: "GET",
    headers: {
      Authorization: `Bot ${token}`,
    },
  });

  return (await res.json()).approximate_member_count;
};

export default getMembersCount;
