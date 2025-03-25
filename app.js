const express = require("express");

const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  console.log(`O aplicativo está escutando na porta ${PORT}`);
});
