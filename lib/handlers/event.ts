import { Client } from "discord.js";
import { readdir, readdirSync } from "node:fs";
import { Framework } from "../plugins/Framework";

export default async function(eventsPath: string, framework: Framework): Promise<void> {
    const amount: object[] = [];
    if (framework?.logger!.handlers) console.log("[Handlers]", eventsPath, "opened...");
    console.log("[Handlers]", eventsPath, "files loaded", `${amount.length} events`);
}