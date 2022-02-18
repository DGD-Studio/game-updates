import { DISCORD_TOKEN } from "./config"
import { Bot } from "#bots/index"

const client = new Bot({
    token: DISCORD_TOKEN,
})
//client.start()
client.gateway?.spawn()
console.log(client)

setInterval(() => {
    client.rest
}, 1000 * 1000 * 1000)
// First
