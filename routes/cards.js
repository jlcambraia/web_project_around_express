const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const cards = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res, next) => {
  fs.readFile(cards, { encoding: "utf8" }, (err, data) => {
    if (err) {
      next(err);
      return;
    }
    res.send(data);
  });
});

module.exports = router;
