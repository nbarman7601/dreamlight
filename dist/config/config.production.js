"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: true,
    DB_URL: process.env.MONGO_URI || '',
    APP_SECRET_KEY: "swapnoghor3016"
    // Add other development-specific configuration here
};
