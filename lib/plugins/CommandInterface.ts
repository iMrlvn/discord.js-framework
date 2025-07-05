import { SlashCommandBuilder } from "discord.js";

export interface Options {
    data?: SlashCommandBuilder;
    cooldown?: number;
    private?: boolean;
    execute?: () => {};
    autoComplete?: () => {};
}

export class CommandInterface {
    public data: SlashCommandBuilder | null;
    public cooldown: number;
    public private: boolean;
    public execute: () => {};
    public Autocomplete: () => {};
    
    constructor(options: Options={}) {
        this.data = options.data || null;
        this.cooldown = options.cooldown || 3000;
        this.private = options.private || false;
        this.execute = options.execute || (() => {})!
        this.setAutocomplete(options);
    }
    setAutocomplete(options: Options={}) {
        if (options.Autocomplete && typeof options.Automplete == "function") this.Autocomplete = options.Autocomplete;
        return this;
    }
}