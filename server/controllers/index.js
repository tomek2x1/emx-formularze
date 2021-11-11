const express = require("express");
const router = express.Router();

router.use("/api/clientComplaint", require("./clientComplaint"));

module.exports = router;
