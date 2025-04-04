const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Dados inválidos fornecidos" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  if (!name && !link) {
    return res.status(400).send({
      message: "Dados inválidos fornecidos",
    });
  }

  return Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.log(err);
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .send({ message: "Dados inválidos fornecidos para criar cartão" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => {
      const error = new Error("Cartão não encontrado");
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de cartão inválido" });
      }
      if (err.name === "DocumentNotFundError") {
        return res.status(404).send({ message: "Cartão não encontrado" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Cartão não encontrado");
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((card) => {
      res.send({ data: card });
    })
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de cartão inválido" });
      }
      if (err.name === "DocumentNotFundError") {
        return res.status(404).send({ message: "Cartão não encontrado" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Cartão não encontrado");
      error.name = "DocumentNotFoundError";
      throw error;
    })
    .then((card) => {
      res.send({ data: card });
    })
    .catch((err) => {
      console.log(err);
      if (err.name === "CastError") {
        return res.status(400).send({ message: "ID de cartão inválido" });
      }
      if (err.name === "DocumentNotFundError") {
        return res.status(404).send({ message: "Cartão não encontrado" });
      }
      return res.status(500).send({ message: "Ocorreu um erro no servidor" });
    });
};
