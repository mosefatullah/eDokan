"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
/* Supabase */
const supabase = (0, supabase_js_1.createClient)(process.env.SB_URL || "", process.env.SB_KEY || "");
exports.default = supabase;
//# sourceMappingURL=supabase.config.js.map