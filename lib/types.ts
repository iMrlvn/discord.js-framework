import { Client } from "discord.js";

export interface Logger {
    handlers?: boolean;
}

export interface FrameworkOptions {
    client?: Client;
    commandsPath?: string;
    eventsPath?: string;
    devGuilds?: string[];
    devUsers?: string[];
    logger?: Logger;
};