const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/aroundb", {
  useNewUrlParser: true,
});

// Solução temporário de autorização
app.use((req, res, next) => {
  req.user = {
    _id: "67ee954a2ce144ce0a84f624",
  };
  next();
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
