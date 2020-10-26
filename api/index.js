const express = require('express');
const rotas = require('./routes');

const app = express();

const porta = 3000;

rotas(app) // acesso as rotas

app.listen(porta, () => { console.log(`Servidor rodando na porta ${porta}`) });

module.exports = app;