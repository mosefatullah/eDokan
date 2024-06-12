"use strict";
const express = require("express");
const router = express.Router();
router.route("/login").get((req, res) => {
    res.json({
        message: "Login successful!",
    });
});
module.exports = router;
//# sourceMappingURL=api.v1.js.map