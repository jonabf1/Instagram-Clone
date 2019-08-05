const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

// Permitir que a aplicação trabalhe com http e socket
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://semana:semana@cluster0-hlmog.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

// Midleware para todas as rotas usarem o socket.io
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Liberando acesso externo para aplicação
app.use(cors());

// Rota para acessar arquivos estaticos
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(process.env.PORT || 3333);
