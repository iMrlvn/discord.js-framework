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

        this.client = options.client;
        this.commandsPath = options.commandsPath;
        this.eventsPath = options.eventsPath;
        this.devGuilds = options.devGuilds;
        this.devUsers = options.devUsers;
        this.logger = options.logger;

        this.loadEverything();
    }

    private async loadEverything() {
        commands(this.commandsPath, this as Framework);
        events(this.eventsPath, this as Framework);
        return this as Framework;
    }
}