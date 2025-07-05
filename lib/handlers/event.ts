import { Client } from "discord.js";
import { readdir, readdirSync } from "node:fs";
import { FrameworkOptions } from "../types";

export default async function(eventsPath: string, client: Client, options: FrameworkOptions={}): Promise<void> {
    const amount: object[] = [];
    if (options?.logger!.handlers) console.log("[Handlers]", eventsPath, "opened...");
    console.log("[Handlers]", eventsPath, "files loaded", `${amount.length} events`);
}