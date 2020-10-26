class NaoEncontrado extends Error {
    constructor() {
        super();
        this.message = 'não encontrado'
        this.code = 404;
        this.name = 'naoEncontrado';
    }
}

module.exports = new NaoEncontrado();