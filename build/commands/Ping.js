"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Command_1 = __importDefault(require("../base/classes/Command"));
const Category_1 = __importDefault(require("../base/enums/Category"));
class Ping extends Command_1.default {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "Ping command",
            category: Category_1.default.Utilities,
            default_member_permissions: discord_js_1.PermissionsBitField.Flags.UseApplicationCommands,
            dm_permission: true,
            cooldown: 3,
            options: [],
            dev: true
        });
    }
    Execute(interaction) {
        interaction.reply({ content: "Ping: " + this.client.ws.ping + "ms", ephemeral: true });
    }
}
exports.default = Ping;
