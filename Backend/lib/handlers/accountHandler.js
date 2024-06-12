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
const supabase_js_1 = require("@supabase/supabase-js");
const router = express_1.default.Router();
/* Supabase */
const supabase = (0, supabase_js_1.createClient)(process.env.SB_URL || "", process.env.SB_KEY || "");
/* User model */
const User = mongoose_1.default.model("User", userSchema_1.default);
/* GET - auto login: verify token */
router.get("/login/verify", checkAuth_1.default, async (req, res) => {
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
/* POST - login: google */
router.post("/login/google", async (req, res) => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `http://localhost:${process.env.PORT || 1000}/api/v1/account/login/google/callback`,
                queryParams: {
                    access_type: "offline",
                    prompt: "consent",
                },
            },
        });
        if (error) {
            res.status(500).json({
                message: "Some error occurred!",
            });
            console.error(error.message);
        }
        else {
            res.status(200).json({ url: data.url });
        }
    }
    catch (err) {
        res.status(500).json({
            message: "Some error occurred!",
        });
        console.error(err.message);
    }
});
// GET - OAuth callback
router.get("/login/google/callback", async (req, res) => {
    try {
        const code = req.query.code;
        const next = req.query.next || process.env.FRONTEND_URL + "/app" || "";
        if (code) {
            const { data, error } = await supabase.auth.exchangeCodeForSession(code);
            if (error) {
                console.error(error.message);
                return res.status(500).json({
                    message: "Failed to exchange code for session",
                });
            }
            // Successfully exchanged the code for a session
            // save the session data or tokens here
            if (data) {
                res.status(200).json({
                    message: "Successfully logged in!",
                });
            }
        }
        res.redirect(303, next);
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
        if (req.body.username) {
            reqObj = {
                $or: [
                    { username: req.body.username },
                    { email: { address: req.body.username } },
                ],
            };
        }
        const user = await User.findOne(reqObj);
        if (user) {
            if (bcrypt_1.default.compareSync(req.body.password, user.password)) {
                const token = jsonwebtoken_1.default.sign({
                    userId: user._id,
                    username: user.username,
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
                    message: "Authentication failed!",
                });
            }
        }
        else {
            res.status(401).json({
                message: "Authentication failed!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: "Some error occurred!",
        });
        console.error(err.message);
    }
});
/* POST - singup: username, email, password */
router.post("/signup", async (req, res) => {
    if (req.body.username && req.body.password && req.body.email) {
        const newUser = new User({
            username: req.body.username,
            email: { address: req.body.email },
            password: bcrypt_1.default.hashSync(req.body.password, 10),
        });
        try {
            const data = await newUser.save();
            res.status(201).json({
                message: "Successfully signed up!",
                user: {
                    username: data.username,
                    email: data.email.address,
                },
            });
        }
        catch (err) {
            res.status(500).json({
                error: "Some error occurred!",
            });
            console.error(err.message);
        }
    }
    else {
        res.status(400).json({
            error: "Please fill up all required fields!",
        });
    }
});
exports.default = router;
//# sourceMappingURL=accountHandler.js.map