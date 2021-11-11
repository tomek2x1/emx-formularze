const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("server");
  } catch (e) {
    response.status(500).send(new Error("Błąd serwera"));
  }
});

module.exports = router;
