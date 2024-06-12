"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* Importing Handlers */
const loginHandler_1 = __importDefault(require("./loginHandler"));
const router = express_1.default.Router();
/* Application Routes */
router.use("/login", loginHandler_1.default);
exports.default = router;
//# sourceMappingURL=apiHandler.js.map