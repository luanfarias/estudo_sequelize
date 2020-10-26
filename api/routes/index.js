/** Arquivo utilizado para gerenciar todas as rotas */
const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');

module.exports = app => {
    app.use(bodyParser.json());
    app.use('/api', pessoas);
}