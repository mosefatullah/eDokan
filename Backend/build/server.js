"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/*
 * Name: eDokan
 * Description: eDokan revolutionizes the retail experience, seamlessly integrating physical stalls into the online realm, elevating productivity and skyrocketing sales.
 */
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
/* Importing Handlers */
const routesHandler_1 = __importDefault(require("./handlers/routesHandler"));
/* Express App Initializaion */
const app = (0, express_1.default)();
/* Express Middlewares */
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "*",
    methods: "GET,PUT,POST,DELETE",
}));
/* MongoDB Connection */
mongoose_1.default
    .connect(process.env.MONGODB_URI || "")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
/* Application Route */
app.use("/api/v1/", routesHandler_1.default);
/* Error Handling */
app.use((err, req, res, next) => {
    if (req.headersSent) {
        return next(err);
    }
    res.status(500).json({
        error: err || "Some error occurred!",
    });
});
/* Server Initialization */
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=server.js.map