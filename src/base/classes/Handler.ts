import { glob } from "glob";
import IHandler from "../interfaces/IHandler";
import path from "path";
import CustomClient from "./CustomClient";
import Event from "./Event";
import SubCommand from "./SubCommand";
import Command from "./Command";

export default class Handler implements IHandler {

    client: CustomClient;

    constructor(client: CustomClient) {
        this.client = client;
    }

    async LoadEvents() {
        const files = (await glob(`build/events/**/*.js`)).map((filePath: string) => path.resolve(filePath))

        files.map(async (file: string) => {
            const event: Event = new (await import(file)).default(this.client);

            if(!event.name) {
                return delete require.cache[require.resolve(file)] && console.log(`${file.split("/").pop()} does not have name`);
            }

            const execute = (...args: any) => event.Execute(...args);

            //@ts-ignore
            if(event.once) this.client.once(event.name, execute);
            //@ts-ignore
            else this.client.on(event.name, execute);

            return delete require.cache[require.resolve(file)]
        });
    }

    async LoadCommands() {
        const files = (await glob(`build/commands/**/*.js`)).map((filePath: string) => path.resolve(filePath))

        files.map(async (file: string) => {
            const command: Command | SubCommand = new (await import(file)).default(this.client);

            if(!command.name) {
                return delete require.cache[require.resolve(file)] && console.log(`${file.split("/").pop()} does not have name`);
            }

            if (file.split("/").pop()?.split(".")[2]) return this.client.subCommands.set(command.name, command);

            this.client.commands.set(command.name, command as Command);

            return delete require.cache[require.resolve(file)]
        });
    }
}