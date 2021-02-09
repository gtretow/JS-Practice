const fs = require("fs");

const produto = { nome: "celular", preco: 22222, desconto: 0.15 };

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err) || "Arquivo salvo!";
  }
);
