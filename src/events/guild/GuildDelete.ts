import { EmbedBuilder, Events, Guild } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import Event from "../../base/classes/Event";
import GuildConfig from "../../base/schemas/GuildConfig";

export default class GuildDelete extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.GuildDelete,
            description: "Guild leave event",
            once: false,
        });
    }

    async Execute(guild: Guild) {
        try {
            await GuildConfig.deleteOne({ guildId: guild.id });
        } catch (err) {
            console.error(err);
        }

        const owner = await guild.fetchOwner();
        owner?.send({
            embeds: [
                new EmbedBuilder()
                .setColor("Red")
                .setDescription("Hey ! I'm sorry to see you go !\n\nIf you have any feedback, please join our support server !")
            ]
        })
        .catch();

    }
    
}