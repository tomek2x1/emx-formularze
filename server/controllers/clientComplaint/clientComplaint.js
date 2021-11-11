const express = require("express");
const router = express.Router();
const upload = require("express-fileupload");

router.use(upload());

router.post("/", async (req, res) => {
  try {
    // Zamiana obiektu w tablicę
    const filesArray = Object.values(req.files);
    filesArray.forEach((file) => {
      file.mv("./uploads/" + file.name, (err) => {
        if (err) {
          console.log(err);
          throw "Zdjęcie nie zostało zapisane";
        }
      });
    });
  } catch (e) {
    res.status(500).send(new Error("Błąd serwera"));
  }
});

module.exports = router;
