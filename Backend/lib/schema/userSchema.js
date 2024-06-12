"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: [
            {
                validator: function (v) {
                    return /^[a-zA-Z0-9_-]+$/.test(v);
                },
                message: "Username should only contain alphanumeric, underscore and dash!",
            },
            {
                validator: function (v) {
                    return v.length > 4 && v.length < 30;
                },
                message: "Username must be longer than 4 and shorter than 30 characters!",
            },
        ],
    },
    email: {
        type: Object,
        required: true,
        address: {
            type: String,
            required: true,
            unique: true,
            validate: [
                {
                    validator: function (v) {
                        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
                    },
                    message: "Email is not valid!",
                },
                {
                    validator: function (v) {
                        return v.length < 50;
                    },
                    message: "Email address must be shorter than 50 characters!",
                },
            ],
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastLoggedinAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = userSchema;
//# sourceMappingURL=userSchema.js.map