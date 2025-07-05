import { Client } from "discord.js";
import { readdir, readdirSync } from "node:fs";
import { FrameworkOptions } from "../types";

export default async function(folderPath: string, client: Client, options: FrameworkOptions={}): void {
    const amount: object[] = [];
    if (options?.logger!.handlers) console.log("[Handlers]", folderPath, "opened...");
    console.log("[Handlers]", folderPath, "files loaded", `${amount.length} events`);
}