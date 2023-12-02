"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)("GuildConfig", new mongoose_1.Schema({
    guildId: String,
}, {
    timestamps: true,
}));
