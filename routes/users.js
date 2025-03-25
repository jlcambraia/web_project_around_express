const router = require("express").Router();
const users = require("../data/users.json");

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  if (!users[req.params.id]) {
    res.status(404).send({ message: "ID do usuário não encontrado" });
  }
});

module.exports = router;
