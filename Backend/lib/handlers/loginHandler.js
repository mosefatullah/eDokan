"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = __importDefault(require("../schema/userSchema"));
const checkAuth_1 = __importDefault(require("../middlewares/checkAuth"));
const router = express_1.default.Router();
/* User model */
const User = mongoose_1.default.model("User", userSchema_1.default);
/* GET - verify authentication: token */
router.get("/verify", checkAuth_1.default, async (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully logged in!",
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Some error occurred!",
        });
        console.error(err.message);
    }
});
/* POST - login: username, password */
router.post("/login", async (req, res) => {
    try {
        let reqObj = {};
        if (req.body.username)
            reqObj = { username: req.body.username };
        if (req.body.email)
            reqObj = { email: req.body.email };
        const user = await User.findOne(reqObj);
        if (user) {
            if (bcrypt_1.default.compareSync(req.body.password, user.password)) {
                const token = jsonwebtoken_1.default.sign({
                    userId: user._id,
                    username: user.username
                }, process.env.JWT_SECRET || "", {
                    expiresIn: "14d",
                });
                res.status(200).json({
                    message: "Successfully logged in!",
                    accessToken: token,
                });
            }
            else {
                res.status(401).json({
                    error: "Authentication failed!",
                });
            }
        }
        else {
            res.status(401).json({
                error: "Authentication failed!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            error: "Some error occurred!",
        });
    }
});
/* POST - singup: username, email, password */
exports.default = router;
//# sourceMappingURL=loginHandler.js.map