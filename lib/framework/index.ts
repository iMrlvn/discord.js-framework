import { Client } from "discord.js";

export interface FrameworkOptions{
    client: Client;
    commandsPath: string;
    eventsPath: string;
    devGuilds?: string[];
    devUsers?: string[];
};

export class Framework {
    private _client!: Client;
    private commandsPath: string = "";
    private eventsPath: string = "";
    private devGuilds: string[] = [];
    private devUsers: string[] = [];
    
    constructor(options?: FrameworkOptions) {
        if (!options) return console.log("Framework", new Error("Need options!"));
        
        this._client = options.client;
        this.commandsPath = options.commandsPath;
        this.eventsPath = options.eventsPath;
        this.devGuilds = options.devGuilds;
        this.devUsers = options.devUsers;
    }
}