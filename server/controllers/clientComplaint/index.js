const express = require("express");
const router = express.Router();

router.post("/*", require("./clientComplaint"));

module.exports = router;
