import { DISCORD_TOKEN, TEST_HOOK_ID, TEST_HOOK_TOKEN } from "./config"
import { Bot } from "#bots/index"
import { executeWebhook } from "#lib/index"

const client = new Bot({
    token: DISCORD_TOKEN,
})
client.start()
executeWebhook(client, TEST_HOOK_ID, "Lr4ZrUnxkaa0-3Gt5IIbxVsYTPRXda7H3F5UOSo8vIDWp-P_hkNopFyRTqb6DI-ZnIqn", {
    content: "Test from Game Updates code",
    username: "Game Updates",
    embeds: [
        {
            description: "Hi"
        }
    ]
})