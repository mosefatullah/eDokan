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
const supabase_config_1 = __importDefault(require("../lib/supabase.config"));
const router = express_1.default.Router();
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
                    email: user.email.address
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
/* POST - login: google */
router.post("/login/google", async (req, res) => {
    const { data, error } = await supabase_config_1.default.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: process.env.FRONTEND_APP,
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
});
/* POST - signup: google */
router.post("/signup/google", async (req, res) => {
    const { data, error } = await supabase_config_1.default.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: process.env.FRONTEND_SIGNUP_CALLBACK,
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
});
/* POST - signup: callback */
router.post("/signup/callback", async (req, res) => {
    var _a, _b;
    if (req.headers.authorization) {
        var token = req.headers.authorization.split(" ")[1];
        const { data, error } = await supabase_config_1.default.auth.getUser(token);
        if (error) {
            res.status(500).json({
                message: "Some error occurred!",
            });
            console.error(error.message);
        }
        else {
            User.create({
                username: ((_a = data.user.user_metadata) === null || _a === void 0 ? void 0 : _a.full_name.toLowerCase().replace(" ", "-")) || "",
                email: { address: data.user.email || "" },
                password: "PROVIDER",
                picture: ((_b = data.user.user_metadata) === null || _b === void 0 ? void 0 : _b.avatar_url) || "",
            })
                .then((data) => {
                res.status(200).json({
                    message: "Successfully signed up!",
                    user: data.user,
                });
            })
                .catch((e) => {
                if (e.code === 11000) {
                    res.status(400).json({
                        message: "User already exists! please login",
                    });
                }
            });
        }
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
/* POST - logout */
router.post("/logout", checkAuth_1.default, async (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully logged out!",
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Some error occurred!",
        });
        console.error(err.message);
    }
});
/* POST - reset password */
router.post("/login/reset-password", async (req, res) => {
    const { data, error } = await supabase_config_1.default.auth.resetPasswordForEmail(req.body.email, {
        redirectTo: process.env.FRONTEND_PASSWORD_RESET,
    });
    if (error) {
        res.status(500).json({
            message: error.message,
        });
        console.error(error.message);
    }
    else {
        res.status(200).json({
            message: "Password reset link sent!",
            data: data,
        });
    }
});
/* GET - get basic user info */
router.get("/user/basic", checkAuth_1.default, async (req, res) => {
    res.status(200).json(req.user);
});
exports.default = router;
//# sourceMappingURL=accountHandler.js.map