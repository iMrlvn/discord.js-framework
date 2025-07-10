import { SlashCommandBuilder } from "discord.js";
import { CommandInterfaceOptions } from "../types";

export class CommandInterface {
    public data: SlashCommandBuilder | null = null;
    public cooldown: number = 3000;
    public private: boolean = false; 
    public execute: any = function execute() {}; 
    public Autocomplete: any = function Autocomplete() {};

    public constructor(options: CommandInterfaceOptions={}) {

        for (const keys of Object.keys(options)) {
            this[keys] = options[keys];
        }

        this.setAutocomplete(options);
    }

    public setAutocomplete(options: CommandInterfaceOptions) {
        if (options.Autocomplete && typeof options.Autocomplete == "function") this.Autocomplete = options.Autocomplete;
        return this as CommandInterface;
    }
}