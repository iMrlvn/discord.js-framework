import EventEmitter from "node:events";
import { Client } from "discord.js";
import { FrameworkOptions } from "./types";

export class Framework extends EventEmitter {
    public _client: Client | null;
    public commandsPath: string;
    public eventsPath: string;
    public devGuilds: string[];
    public devUsers: string[];
    
    constructor(options: FrameworkOptions = {}) {
        super();
        
        if (!options) {
            throw ("Framework", new Error("Need options!"));
        };
        
        this._client = options.client || null;
        this.commandsPath = options.commandsPath || "./commands";
        this.eventsPath = options.eventsPath || "./events";
        this.devGuilds = options.devGuilds || [];
        this.devUsers = options.devUsers || [];
        
    }
    async loadEverything() {
        
    }
}