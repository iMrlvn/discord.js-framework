import { Client } from "discord.js";

export interface FrameworkOptions{
    client: Client;
    commandsPath: string;
    eventsPath: string;
    devGuilds?: string[];
    devUsers?: string[];
};

export class Framework {
    constructor(options: FrameworkOptions) {
        if (!options) return console.log("Framework", new Error("Need options!"));
        
        this._client = options.client;
        this.commandsPath = options.commandsPath;
        this.eventsPath = options.eventsPath;
        this.devGuilds = options.devGuilds;
        this.devUsers = options.devUsers;
        
        this.loadEverything();
    }
    async loadEverything(): Promise<void> {
        // next
    }
}