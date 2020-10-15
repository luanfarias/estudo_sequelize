const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const porta = 3000;

app.listen(porta, () => { console.log(`Servidor rodando na porta ${porta}`) });

module.exports = app;