import { SlashCommandBuilder } from "discord.js";

export interface Options {
    data?: SlashCommandBuilder;
    cooldown?: number;
    private?: boolean;
    execute?: any;
    Automplete?: any;
}

export class CommandInterface {
    public data: SlashCommandBuilder | null;
    public cooldown: number;
    public private: boolean;
    public execute: any;
    public Autocomplete: any;
    
    constructor(options: Options={}) {
        this.data = options.data || null;
        this.cooldown = options.cooldown || 3000;
        this.private = options.private || false;
        this.execute = options.execute || (() => void 0);
        this.setAutocomplete(options);
    }
    setAutocomplete(options: Options={}) {
        this.Autocomplete = () => void 0;
        if (options.Autocomplete && typeof options.Autocomplete == "function") this.Autocomplete = options.Autocomplete;
        return this;
    }
}