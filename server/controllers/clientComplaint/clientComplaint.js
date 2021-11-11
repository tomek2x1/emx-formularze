const express = require("express");
const router = express.Router();
const upload = require("express-fileupload");

router.use(upload());

const sendDataWithoutImage = async (data) => {
  console.log("brak zdjęć");
};

const sendDataWithOneImage = async (data) => {
  console.log("1 zdjęcie");
};

const sendDataWithTwoImage = async (data) => {
  console.log("2 zdjęcia");
};

const sendDataWithThreeImage = async (data) => {
  console.log("3 zdjęcia");
};

const sendDataWithFourImage = async (data) => {
  console.log("4 zdjęcia");
};

const sendDataWithFiveImage = async (data) => {
  console.log("5 zdjęcia");
};

router.post("/", async (req, res) => {
  try {
    let filesArray = "";
    if (req.files) {
      // Zamiana obiektu w tablicę
      filesArray = Object.values(req.files);
      filesArray.forEach((file, index) => {
        //   Pobieranie rozszerzenia zdjęcia
        const extension = file.name.substr(file.name.indexOf("."));
        //   Zapisywanie zdjęcia
        file.mv(`./uploads/image${index}${extension}`, (err) => {
          if (err) {
            console.log(err);
            throw "Zdjęcie nie zostało zapisane";
          }
        });
      });
    }
    // odczytywanie plików i wysyłka do Freshdesk
    console.log(filesArray.length);
    switch (filesArray.length) {
      case 0:
        sendDataWithoutImage();
        break;
      case 1:
        sendDataWithOneImage();
        break;
      case 2:
        sendDataWithTwoImage();
        break;
      case 3:
        sendDataWithThreeImage();
        break;
      case 4:
        sendDataWithFourImage();
        break;
      case 5:
        sendDataWithFiveImage();
        break;
      default:
        throw "Nie udało się wysłać zdjęć";
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(new Error("Błąd serwera"));
  }
});

module.exports = router;
