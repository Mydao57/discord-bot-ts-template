import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, EmbedBuilder, Events, Guild, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";

export default class Emit extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "emit",
            description: "Emit an event",
            dev: true,
            default_member_permissions: PermissionsBitField.Flags.Administrator,
            dm_permission: false,
            category: Category.Developer,
            options: [
                {
                    name: "event",
                    description: "The event to emit",
                    required: true,
                    type: ApplicationCommandOptionType.String,
                    choices: [
                        {name: "GuildCreate", value: Events.GuildCreate},
                        {name: "GuildDelete", value: Events.GuildDelete},
                    ]
                }
            ],
            cooldown: 1
        })
    }

    Execute(interaction: ChatInputCommandInteraction) {
        const event = interaction.options.getString("event", true);

        if (event == Events.GuildCreate || event == Events.GuildDelete){
            this.client.emit(event, interaction.guild as Guild);
        }

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setColor("Green")
                .setDescription(`✅ Event \`${event}\` emitted`)
            ], ephemeral: true
        })
    }
}