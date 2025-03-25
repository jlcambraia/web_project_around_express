const router = require("express").Router();
const users = require("../data/users.json");

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((user) => user._id === req.params.id);

  if (!user) {
    return res.status(404).send({ message: "ID do usuário não encontrado" });
  }

  res.send(user);
});

module.exports = router;
