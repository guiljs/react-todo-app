module.exports = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') //Posso listar aqui, quem pode acessar
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() //Continua o fluxo indo para o próximo middleware
}