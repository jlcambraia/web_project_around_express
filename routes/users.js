const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const users = path.join(__dirname, "../data/users.json");

router.get("/", (req, res, next) => {
  fs.readFile(users, { encoding: "utf8" }, (err, data) => {
    if (err) {
      next(err);
      return;
    }
    res.send(data);
  });
});

router.get("/:id", (req, res, next) => {
  fs.readFile(users, { encoding: "utf8" }, (err, data) => {
    if (err) {
      next(err);
      return;
    }

    const userList = JSON.parse(data);

    const user = userList.find(
      (selectedUser) => selectedUser._id === req.params.id
    );

    if (!user) {
      res.status(404).send({ message: "ID do usuário não encontrado" });
      return;
    }

    res.send(user);
  });
});

module.exports = router;
