const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Dados inválidos fornecidos" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => {
      const error = new Error("Usuário não encontrado");
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de usuário inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  if (!name && !about && !avatar) {
    return res.status(400).send({
      message: "Dados inválidos fornecidos",
    });
  }

  return User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.log(err);
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .send({ message: "Dados inválidos fornecidos para criar usuário" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;

  if (!name && !about) {
    return res.status(400).send({
      message: "Dados inválidos fornecidos",
    });
  }

  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail(() => {
      const error = new Error("Usuário não encontrado");
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Dados inválidos fornecidos" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  if (!avatar) {
    return res.status(400).send({
      message: "Dados inválidos fornecidos",
    });
  }

  return User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail(() => {
      const error = new Error("Usuário não encontrado");
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Dados inválidos fornecidos" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};
