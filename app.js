const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

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
