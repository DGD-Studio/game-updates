import dotenv from "dotenv"
dotenv.config()

if (!process.env.TOKEN) throw new Error(`Ummmm token needed....`)
export const DISCORD_TOKEN = process.env.TOKEN
export const TEST_HOOK_ID = process.env.HOOK_ID as string
export const TEST_HOOK_TOKEN = "Lr4ZrUnxkaa0-3Gt5IIbxVsYTPRXda7H3F5UOSo8vIDWp-P_hkNopFyRTqb6DI-ZnIqn"