const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const users = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(users, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(users, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const userList = JSON.parse(data);

    const user = userList.find(
      (selectedUser) => selectedUser._id === req.params.id
    );

    if (!user) {
      return res.status(404).send({ message: "ID do usuário não encontrado" });
    }

    res.send(user);
  });
});

module.exports = router;
