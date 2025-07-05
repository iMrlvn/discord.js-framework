import EventEmitter from "node:events";
import { Client } from "discord.js";
import { FrameworkOptions, Logger } from "../types";
import { readdirSync } from "node:fs";

export class Framework extends EventEmitter {
    private _client: Client | null;
    private commandsPath: string;
    private eventsPath: string;
    private devGuilds: string[];
    private devUsers: string[];
    private logger: Logger;
    
    constructor(options: FrameworkOptions = {}) {
        super();
        
        this._client = options.client || null;
        this.commandsPath = options.commandsPath || "./commands";
        this.eventsPath = options.eventsPath || "./events";
        this.devGuilds = options.devGuilds || [];
        this.devUsers = options.devUsers || [];
        this.logger = options.logger || { handlers: true };
    }
    async loadEverything() {
        const commands = await import("../handlers/command");
        commands(this.commandsPath, this._client, this);
        const events = await import("../handlers/event");
        events(this.eventsPath, this._client, this);
    }
}