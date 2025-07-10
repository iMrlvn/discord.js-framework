import { Client } from "discord.js";
import { readdir, readdirSync } from "node:fs";
import { Framework } from "../plugins/Framework";

export default async function(commandsPath: string, framework: Framework): Promise<void> {
    const amount: object[] = [];
    if (framework?.logger!.handlers) console.log("[Handlers]", commandsPath, "opened...");
    console.log("[Handlers]", commandsPath, "files loaded", `${amount.length} commands`);
}