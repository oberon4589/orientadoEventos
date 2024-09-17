const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/sobre", (req, res) => {
  res.send("Assim que funciona eventos com Node.js");
});

app.listen(port, () => {
  console.log(`Aplicação rodando em: http://localhost:${port}`);
});
