import EventEmitter from "node:events";
import { Client } from "discord.js";
import { FrameworkOptions } from "../types";

export class Framework extends EventEmitter {
    private _client: Client | null;
    private commandsPath: string;
    private eventsPath: string;
    private devGuilds: string[];
    private devUsers: string[];
    
    constructor(options: FrameworkOptions = {}) {
        super();
        
        this._client = options.client || null;
        this.commandsPath = options.commandsPath || "./commands";
        this.eventsPath = options.eventsPath || "./events";
        this.devGuilds = options.devGuilds || [];
        this.devUsers = options.devUsers || [];
        
    }
    async loadEverything() {
        
    }
}