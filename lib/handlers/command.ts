import { Client } from "discord.js";
import { readdir, readdid } from "node:fs";

export default async function(commandsPath: string, client: Client, options?: FrameworkOptions = {}) {
    const amount: object[] = [];
    if (options.logger!.handlers) console.log("[Handlers]", folderPath, "opened...");
    console.log("[Handlers]", folderPath, "files loaded", `${amount.length} commands`);
}