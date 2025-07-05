import EventEmitter from "node:events";
import { Client } from "discord.js";

export interface FrameworkOptions{
    client: Client;
    commandsPath: string;
    eventsPath: string;
    devGuilds?: string[];
    devUsers?: string[];
};

export class Framework extends EventEmitter {
    public _client!: Client;
    public commandsPath!: string;
    public eventsPath!: string;
    public devGuilds: string[];
    public devUsers: string[];
    
    constructor(options?: FrameworkOptions = {}) {
        if (!options) {
            console.log("Framework", new Error("Need options!"));
        };
        
        this._client = options.client || new Client();
        this.commandsPath = options.commandsPath || "./commands";
        this.eventsPath = options.eventsPath || "./events";
        this.devGuilds = options.devGuilds || [];
        this.devUsers = options.devUsers || [];
    }
}