"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "");
        const { userId, username } = decoded;
        req.userId = userId;
        req.username = username;
        next();
    }
    catch (_a) {
        next("Authentication failed!");
    }
};
exports.default = checkLogin;
//# sourceMappingURL=checkAuth.js.map