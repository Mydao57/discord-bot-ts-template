import { ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../base/classes/Command";
import CustomClient from "../base/classes/CustomClient";
import Category from "../base/enums/Category";

export default class Ping extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "ping",
            description: "Ping command",
            category: Category.Utilities,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: true,
            cooldown: 3,
            options: [],
            dev: true
        });
    }

    Execute(interaction: ChatInputCommandInteraction) {
        interaction.reply({ content: "Ping: " + this.client.ws.ping + "ms", ephemeral: true});
    }
}