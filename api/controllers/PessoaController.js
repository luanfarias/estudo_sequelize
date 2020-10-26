const database = require("../models"); // modelos
const consign = require('consign');

var erros = {};
consign({cwd: 'api\\helpers\\'}).include('/errors').into(erros)


class PessoaController {
    static async pegarTodasAsPessoas(requisicao, resposta) {
        try {
            const todasAspessoas = await database.Pessoas.findAll();
            return resposta.status(200).json(todasAspessoas)
        } catch(error) {
            return resposta.status(500).json(erro.message);
        }
    }

    static async pegaUmaPessoa(requisicao, resposta) {
        const id = requisicao.params.id;
        console.log(id);
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
            return resposta.status(error.code).json(error);
        }
    }

    static async criaUmaPessoa(requisicao, resposta) {
        const novaPessoa = requisicao.body;

        try {
            const pessoaCriada = await database.Pessoas.create(novaPessoa);
            console.log(JSON.stringify(pessoaCriada));
            return resposta.status(200).json(pessoaCriada);
        } catch (error) {   
            return resposta.status(500).json(pessoaCriada);
        }
    }
}

module.exports = PessoaController;

