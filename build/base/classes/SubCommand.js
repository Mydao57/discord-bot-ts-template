"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubCommand {
    constructor(client, options) {
        this.client = client;
        this.name = options.name;
    }
    Execute(interaction) {
        throw new Error("Method not implemented.");
    }
}
exports.default = SubCommand;
