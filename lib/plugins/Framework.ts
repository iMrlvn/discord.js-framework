import EventEmitter from "node:events";
import { Client } from "discord.js";
import { FrameworkOptions, Logger } from "../types";
import { readdirSync } from "node:fs";
import { default as commands } from "../handlers/command";
import { default as events } from "../handlers/event";

export class Framework extends EventEmitter {
    private client: Client | null;
    private commandsPath: string;
    private eventsPath: string;
    private devGuilds: string[];
    private devUsers: string[];
    private logger: Logger;
    
    constructor(options: FrameworkOptions = {}) {
        super();
        
        this.client = options.client || null;
        this.commandsPath = options.commandsPath || "./commands";
        this.eventsPath = options.eventsPath || "./events";
        this.devGuilds = options.devGuilds || [];
        this.devUsers = options.devUsers || [];
        this.logger = options.logger || { handlers: true };
    }
    async loadEverything() {
        commands(this.commandsPath, this as Framework);
        events(this.eventsPath, this as Framework);
    }
}