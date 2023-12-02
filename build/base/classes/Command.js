"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(client, options) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.options = options.options;
        this.default_member_permissions = options.default_member_permissions;
        this.dm_permission = options.dm_permission;
        this.cooldown = options.cooldown;
        this.dev = options.dev;
    }
    Execute(interaction) {
    }
    AutoComplete(interaction) {
    }
}
exports.default = Command;
