import dotenv from "dotenv"
dotenv.config()

if (!process.env.TOKEN) throw new Error(`Ummmm token needed....`)
export const DISCORD_TOKEN = process.env.TOKEN