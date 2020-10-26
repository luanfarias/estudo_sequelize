const database = require("../models"); // modelos
const consign = require('consign');

var erros = {};
consign({cwd: 'api\\helpers\\'}).include('/errors').into(erros)


class PessoaController {
    async pegarTodasAsPessoas(requisicao, resposta) {
        try {
            const todasAspessoas = await database.Pessoas.findAll();
            return resposta.status(200).json(todasAspessoas)
        } catch(error) {
            return resposta.status(500).json(erro.message);
        }
    }

    async pegaUmaPessoa(requisicao, resposta) {
        const { id } = requisicao.params;
        try {
            const umaPessoa = await database.Pessoas.findOne(
                { where: { 
                    id: Number(id)
                } 
            });

            if (!umaPessoa) {
                throw erros.NaoEncontrado;
            }
            return resposta.status(200).json(umaPessoa);
        } catch (error) {
            return resposta.status(erro.code).json(erro);
        }
    }
}

module.exports = new PessoaController();

