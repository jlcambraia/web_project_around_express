const express = require("express");
const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

const app = express();

app.use("/users", usersRouter);
app.use("/cards", cardRouter);

const handlePageNotFound = (req, res, next) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
};

const handleServerError = (err, req, res, next) => {
  res.status(500).json({ message: "Ocorreu um erro no servidor" });
};

app.use(handlePageNotFound);
app.use(handleServerError);

app.listen(PORT, () => {
  console.log(`O aplicativo está escutando na porta ${PORT}`);
});
