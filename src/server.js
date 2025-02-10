// Importa o framework Express e o módulo path
const express = require("express");
const path = require("path");

// Cria uma instância do aplicativo Express
const app = express();

// Define o hostname e a porta onde o servidor será executado
const hostname = "127.0.0.1"; // IP local (localhost)
const port = 3000; // Porta onde o servidor ficará ouvindo

// Configura a pasta "public" para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rota raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo à lojal!\n");
});

// Rota para /produtos
app.get("/produtos", (req, res) => {
  res.send("Aqui estão os produtos disponíveis.\n");
});

// Rota para /sobre
app.get("/sobre", (req, res) => {
  res.send("Esta é a página sobre a loja virtual.\n");
});

// Rota para páginas não encontradas
app.use((req, res) => {
  res.status(404).send("404 - Página não encontrada\n");
});

// Faz o servidor ouvir na porta definida
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
