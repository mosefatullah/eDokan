"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema_1 = __importDefault(require("../schema/userSchema"));
const User = mongoose_1.default.model("User", userSchema_1.default);
const checkLogin = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "");
        if (decoded["app_metadata"] &&
            decoded["app_metadata"]["provider"] === "google") {
            const user = await User.findOne({ email: { address: decoded["email"] } });
            if (!user)
                next("Authentication failed or user not found!");
            else {
                user.lastLoggedinAt = new Date();
                user.picture =
                    decoded["user_metadata"]["avatar_url"] ||
                        decoded["user_metadata"]["picture"];
                await user.save();
                req.user = {
                    picture: decoded["user_metadata"]["avatar_url"] ||
                        decoded["user_metadata"]["picture"],
                    email: decoded["email"],
                    userId: user._id,
                    username: user.username,
                };
                next();
            }
        }
        else {
            const user = await User.findOne({ _id: decoded["userId"] });
            if (!user)
                next("Authentication failed or user not found!");
            else {
                user.lastLoggedinAt = new Date();
                await user.save();
                req.user = {
                    picture: user.picture || null,
                    email: user.email.address,
                    userId: user._id,
                    username: user.username,
                };
                next();
            }
        }
    }
    catch (_a) {
        next("Authentication failed!");
    }
};
exports.default = checkLogin;
//# sourceMappingURL=checkAuth.js.map