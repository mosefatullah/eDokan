"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* Importing Handlers */
const accountHandler_1 = __importDefault(require("./accountHandler"));
const router = express_1.default.Router();
/* All Routes */
router.use("/account", accountHandler_1.default);
exports.default = router;
//# sourceMappingURL=routesHandler.js.map