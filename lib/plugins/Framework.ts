import EventEmitter from "node:events";
import { Client } from "discord.js";
import { FrameworkOptions, Logger } from "../types";
import { default as commands } from "../handlers/command";
import { default as events } from "../handlers/event";

export class Framework extends EventEmitter {
    public client: Client | null = null;
    public commandsPath: string = "./commands";
    public eventsPath: string = "./events";
    public devGuilds: string[] = [];
    public devUsers: string[] = [];
    public logger: Logger = { handlers: true };

    public constructor(options: FrameworkOptions) {
        super();

        switch(options) {
            case (options.client): this.client = options.client;
            case (options.commandsPath): this.commandsPath = options.commandsPath;
            case (options.eventsPath): this.eventsPath = options.eventsPath;
            case (options.devGuilds): this.devGuilds = options.devGuilds;
            case (options.devUser): this.devUsers = options.devUsers;
            case (options.logger): this.logger = options.logger;
        }

        if (options) this.loadEverything();
    }

    private async loadEverything() {
        commands(this.commandsPath, this as Framework);
        events(this.eventsPath, this as Framework);
        return this as Framework;
    }
}