const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlenght: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlenght: 30,
  },
  avatar: {
    type: String,
    required: true,
    validator: (v) => {
      return /(http:\/\/|https:\/\/)(www\.)?(.+)(\/)?(#)?/gi.test(v);
    },
  },
});

module.exports = mongoose.model("user", userSchema);

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlenght30,
  },
  link: {
    type: String,
    required: true,
    validator: (v) => {
      return /(http:\/\/|https:\/\/)(www\.)?(.+)(\/)?(#)?/gi.test(v);
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("card", cardSchema);

app.use("/users", usersRouter);
app.use("/cards", cardRouter);

const handlePageNotFound = (req, res) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
};

const handleServerError = (err, req, res) => {
  res.status(500).json({ message: "Ocorreu um erro no servidor" });
};

app.use(handlePageNotFound);
app.use(handleServerError);

app.listen(PORT, () => {
  console.log(`O aplicativo está escutando na porta ${PORT}`);
});
