import { Client } from "discord.js";
import { readdirSync } from "node:fs";

export default function(folderPath: string, client: Client) {
    const amount: object[] = [];
    if (options?.logger!.handlers) console.log("[Handlers]", folderPath, "opened...");
    console.log("[Handlers]", folderPath, "files loaded", `${amount.length} events`);
}