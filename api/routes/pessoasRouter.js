const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', pessoaController.pegarTodasAsPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.post('/pessoas', pessoaController.criaUmaPessoa);

module.exports = router;